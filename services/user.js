const User = require('../models/user');
const user = require('../models/user');

async function postUser(displayName, email, password, image) {
    const existEmail = await user.findOne({ where: { email } });
    if (existEmail) {
        throw new Error('User already registered');
    }
    const userCreate = await user.create({ displayName, email, password, image });
    return userCreate.id;
}

async function allUser() {
    const getUser = await User.findAll();
    return getUser;
}

module.exports = {
    postUser,
    allUser,
};