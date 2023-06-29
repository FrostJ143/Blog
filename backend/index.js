require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./configs/dbConn");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

mongoose.connection.once("open", () => {
    console.log("Connected to DB");

    app.listen(8800, () => {
        console.log("Server is running on port 8800!");
    });
});
