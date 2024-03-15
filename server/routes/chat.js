import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { accessChat, createGroupChat, fetchChat } from '../controllers/chat.js';
const router = express.Router();

router.route('/').post(isAuth, accessChat).get(isAuth, fetchChat);
router.route('/group').post(isAuth, createGroupChat);
// router.route('/group/rename').put(isAuth, renameGroupChat);
// router.route('/group/remove').put(isAuth, removeUserFromGroupChat);
// router.route('/group/add').put(isAuth, addMemberToGroupChat);

export default router;