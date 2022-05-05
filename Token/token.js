const jwt = require('jsonwebtoken');

function token(id) {
    const tok = jwt.sign({ id }, process.env.JWT_SECRET);
    return tok;
}

function validToken(tkn) {
    const tok = jwt.verify(tkn, process.env.JWT_SECRET);
    return tok;
}

module.exports = {
    token,
    validToken,
};