import express from 'express';
import { userLogin, userRegister } from '../controllers/user.js';
const router = express.Router();

router.route('/login').post(userLogin);
router.route('/register').post(userRegister);

export default router;