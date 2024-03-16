import User from '../models/user.js';
import errorHandler from '../utils/error.js';
import { sendPasswordMail } from '../utils/mail.js';
import { comparePassword, hashPassword } from '../utils/password.js';
import { generateToken, verifyToken } from '../utils/token.js';

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(errorHandler(400, 'Missing fields'));
        }
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(400, "User doesn't exist"));
        }
        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword) {
            return next(errorHandler(400, "Invalid Email or Password"));
        }
        const token = generateToken({
            _id: user._id
        }, {
            expiresIn: "7d"
        });

        res.cookie('letsChatToken', token, {
            httpOnly: true,
            maxAge: 604800000, // 7 Days
            sameSite: 'none',
            secure: true
        }).status(201).json({
            success: true,
            message: 'Login Successfully',
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                photo: user.photo
            }
        })
    } catch (err) {
        next(err);
    }
}

export const userRegister = async (req, res, next) => {
    try {
        const { name, email, password, phone, photoURL } = req.body;
        if (!name || !email || !password || !phone || !photoURL) {
            return next(errorHandler(400, 'Missing fields'));
        }
        const userExist = await User.findOne({ email, phone });
        if (userExist) {
            return next(errorHandler(400, "User already exists"));
        }
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            photo: photoURL
        });

        res.status(201).json({
            success: true,
            message: 'Register Successfully'
        })
    } catch (err) {
        next(err);
    }
}

export const forgetPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email) {
            return next(errorHandler(400, 'Provide Email'));
        }
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(400, 'Email Not Registered'));
        }
        // generate a reset password token:
        const token = generateToken({
            _id: user._id
        }, {
            expiresIn: '10m'
        });

        await sendPasswordMail(user._id, token, email)
        res.status(200).json({
            success: true
        })
    } catch (err) {
        next(err);
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const id = req.params.id;
        const token = req.params.token;

        try {
            verifyToken(token);
            const hashedPassword = await hashPassword(password);

            const user = await User.findByIdAndUpdate(id, { password: hashedPassword });
            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            res.status(200).json({
                success: true
            });
        } catch (error) {
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

export const allUsers = async (req, res, next) => {
    try {
        const keyword = req.query.search ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } }
            ]
        } : {};
        const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

        res.status(200).json({
            users
        })
    } catch (err) {
        next(err);
    }
}

export const logOutUser = async (req, res, next) => {
    try {
        res.clearCookie('letsChatToken');
        res.status(200).send('Logout successfully');
    } catch (err) {
        next(err);
    }
}


export const checkCookies = async (req, res, next) => {
    try {
        const user = await User.find({ _id: req.user._id });
        res.status(200).json({
            success: true,
            user
        })
    } catch (err) {
        next(err);
    }
}