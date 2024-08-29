const User = require('../Model/UserModel');

//data display
const getAllUsers = async (req, res, next) => {

    let Users;

    //Get all users
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    //not found
    if (!users) {
        return res.status(404).json({ message: "User not found" });
    }

    //Display all users
    res.status(200).json({ users: users });
};

//data insert
const addUsers = async (req, res, next) => {

    const { service, name, address, phoneNumber, date, time } = req.body;

    let users;

    try {
        users = new User({service, name, address, phoneNumber, date, time});
        await users.save();
    } catch (error) {
        console.log(err);
    }

    //don't insert users
    if (!users) {
        return res.status(404).json({ message: "Unable to add users" });
    }
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;