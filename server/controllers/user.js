import User from '../models/user.js';
import errorHandler from '../utils/error.js';
import { comparePassword, hashPassword } from '../utils/password.js';
import { generateToken } from '../utils/token.js';

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
        });

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 604800000 // 7 Days
        }).status(201).json({
            success: true,
            message: 'Login Successfully',
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo
            }
        })
    } catch (err) {
        next(err);
    }
}

export const userRegister = async (req, res, next) => {
    try {
        const { name, email, password, photoURL } = req.body;
        if (!name || !email || !password || !photoURL) {
            return next(errorHandler(400, 'Missing fields'));
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return next(errorHandler(400, "User already exists"));
        }
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
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