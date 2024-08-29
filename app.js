// console.log("byeeeeeeeee");
//pass = NaY6fudHCxWxuann

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use("/",(req, res, next) => {
    res.send("It is working..............");
})

mongoose.connect("mongodb+srv://thivinasamarakkody:dcba4321@mern-wastemgt.jjkh7.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000)
})
.catch((err) => console.log(err));