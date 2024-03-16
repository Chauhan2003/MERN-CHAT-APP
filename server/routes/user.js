import express from 'express';
import { allUsers, checkCookies, forgetPassword, logOutUser, resetPassword, userLogin, userRegister } from '../controllers/user.js';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/forgetpassword').post(forgetPassword);
router.route('/resetpassword/:id/:token').put(resetPassword);
router.route('/logout').get(isAuth, logOutUser);
router.route('/').get(isAuth, allUsers);
router.route('/checkcookie').get(isAuth, checkCookies);

export default router;