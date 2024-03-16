import express from 'express';
import { allUsers, forgetPassword, resetPassword, userLogin, userRegister } from '../controllers/user.js';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/forgetpassword').post(forgetPassword);
router.route('/resetpassword/:id/:token').put(resetPassword);
router.route('/').get(isAuth, allUsers);

export default router;