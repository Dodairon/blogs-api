const serviceLogin = require('../services/login');

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const tokenId = await serviceLogin(
      email,
      password,
    );
    res.status(200).json({ token: tokenId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
    loginUser,
};