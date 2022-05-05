const User = require('../models/user');
const { validToken } = require('../Token/token');

function verifyAuth(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { id } = validToken(authorization);
    const user = User.findByPk(id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = {
  verifyAuth,
};
