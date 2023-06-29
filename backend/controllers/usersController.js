const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const deleteUser = async (req, res) => {
    if (req.body.userID === req.params.id) {
        const foundUser = await User.findById(req.params.id);
        if (!foundUser) return res.status(400).json({ message: "Can not find account" });
        try {
            await Post.deleteMany({ username: foundUser.username });
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Delete user successfully!" });
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(400).json({ message: "You can just delete your account!" });
    }
};

const updateUser = async (req, res) => {
    if (req.body.userID === req.params.id) {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            } catch (error) {
                return res.status(500).json(error);
            }
        }

        try {
            await User.findByIdAndUpdate(req.params.id, { ...req.body });
            res.status(200).json({ message: "Update user successfully!" });
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(400).json({ message: "You can not update another user" });
    }
};

const getUser = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        if (!foundUser) return res.status(400).json({ message: "Can not fine User" });
        const { password, ...others } = foundUser._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    deleteUser,
    updateUser,
    getUser,
};
