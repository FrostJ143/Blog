const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
