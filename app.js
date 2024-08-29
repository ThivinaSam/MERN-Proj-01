// console.log("byeeeeeeeee");
//pass = NaY6fudHCxWxuann

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);

mongoose.connect("mongodb+srv://thivinasamarakkody:dcba4321@mern-1.m1iu3.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000)
})
.catch((err) => console.log(err));