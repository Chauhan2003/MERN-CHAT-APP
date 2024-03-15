import express from 'express';
import { allUsers, userLogin, userRegister } from '../controllers/user.js';
const router = express.Router();

router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/').get(allUsers);

export default router;