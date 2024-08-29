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

    let user;

    try {
        user = new User({service, name, address, phoneNumber, date, time});
        await users.save();
    } catch (error) {
        console.log(err);
    }

    //not insert users
    if (!user) {
        return res.status(404).json({ message: "Unable to add users" });
    }
    return res.status(200).json({ users });
};

//Get by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    //not available users
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;