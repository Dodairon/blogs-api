const serviceUser = require('../services/user');
const { token } = require('../Token/token');

async function postUser(req, res) {
  try {
    const { displayName, email, password, image } = req.body;
    const tokenId = await serviceUser.postUser(
      displayName,
      email,
      password,
      image,
    );
    const tkn = token(tokenId);
    res.status(201).json({ token: tkn });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

async function allUser(req, res) {
  try {
    const getUser = await serviceUser.allUser();
    res.status(200).json(getUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  postUser,
  allUser,
};
