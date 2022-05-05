const user = require('../models/user');
const { token } = require('../Token/token');

async function login(email, password) {
    const existEmail = await user.findOne({ where: { email } });
    if (!existEmail || password !== existEmail.password) {
        throw new Error('Invalid fields');
    }
    const tkn = token(existEmail.id);
    return tkn;
}

module.exports = login;