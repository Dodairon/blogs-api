const jwt = require('jsonwebtoken');

module.exports = function token(id) {
    const tok = jwt.sign({ id }, process.env.JWT_SECRET);
    return tok;
};