const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        if (foundUser) {
            const isMatchPassword = await bcrypt.compare(req.body.password, foundUser.password);

            if (isMatchPassword) {
                const { password, ...other } = foundUser._doc;
                return res.status(200).json(other);
            } else {
                res.status(400).json({ message: "Email or password is wrong!" });
            }
        } else {
            res.status(400).json({ message: "Email or password is wrong!" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = {
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
        };

        await User.create(newUser);
        res.status(201).json({ message: "Register successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    login,
    register,
};
