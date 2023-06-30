require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./configs/dbConn");
const multer = require("multer");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpg");
    },
});

const upload = multer({ storage });

app.post(
    "/api/upload",
    upload.single("file", (req, res) => {
        try {
            res.status(200).json("Upload file successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    })
);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

mongoose.connection.once("open", () => {
    console.log("Connected to DB");

    app.listen(8800, () => {
        console.log("Server is running on port 8800!");
    });
});
