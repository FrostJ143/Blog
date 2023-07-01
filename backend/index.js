require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./configs/dbConn");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: (origin, cb) => {
        cb(null, true);
    },
};

app.use(cors(corsOptions));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./public/images");
//     },
//     filename: (req, file, cb) => {
//         req.filename = Date.now() + file.originalname;
//         cb(null, req.filename);
//     },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), (req, res) => {
//     try {
//         res.status(201).json(req.filename);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });
//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        req.filename = Date.now() + file.originalname;
        cb(null, req.filename);
    },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        res.status(201).json({ message: "Upload file successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.use("/images", express.static(path.join(__dirname, "public/images/")));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/cats", require("./routes/category"));

mongoose.connection.once("open", () => {
    console.log("Connected to DB");

    app.listen(8800, () => {
        console.log("Server is running on port 8800!");
    });
});
