import jwt from 'jsonwebtoken';
import errorHandler from '../utils/error.js';

export const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.letsChatToken;
        if (!token) {
            return next(errorHandler(401, 'Unauthorized - Login Again'));
        }
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) {
                return next(errorHandler(401, 'Unauthorized - Login Again'))
            }
            req.user = user;
            next();
        })
    } catch (err) {
        next(err);
    }
}