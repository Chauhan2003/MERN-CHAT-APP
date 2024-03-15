import Chat from "../models/chat.js";
import User from '../models/user.js';
import errorHandler from "../utils/error.js";

export const accessChat = async (req, res, next) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return next(errorHandler(400, 'User ID is not sent'));
        }
        var isChat = await Chat.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { $elemMatch: { $eq: userId } } },
            ],
        }).populate('users', '-password').populate('latestMessage');

        isChat = await User.populate(isChat, {
            path: 'latestMessage.sender',
            select: 'name email phone photo'
        })

        if (isChat.length > 0) {
            res.send(isChat[0]);
        }
        else {
            var newChat = {
                chatName: 'sender',
                isGroupChat: false,
                users: [req.user._id, userId]
            }

            const chat = await Chat.create(newChat);
            const fullChat = await Chat.findOne({ _id: chat._id }).populate(
                'users',
                '-password'
            );

            res.status(200).json({
                fullChat
            })
        }
    } catch (err) {
        next(err);
    }
}

export const fetchChat = async (req, res, next) => {
    try {
        var userChats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })

        userChats = await User.populate(userChats, {
            path: 'latestMessage.sender',
            select: 'name email phone photo'
        })

        res.status(200).json({
            userChats
        })
    } catch (err) {
        nect(err);
    }
}

export const createGroupChat = async (req, res, next) => {
    try {
        if (!req.body.users || !req.body.name) {
            return next(errorHandler(400, 'Missing data'))
        }
        var users = JSON.parse(req.body.users);
        if (users.length < 2) {
            return next(errorHandler(400, 'More than 2 users are required to form a group chat'))
        }
        users.push(req.user);

        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user,
        });

        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json({
            fullGroupChat
        });
    } catch (err) {
        next(err);
    }
}