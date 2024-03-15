import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "7d"
    });
}

export default generateToken;