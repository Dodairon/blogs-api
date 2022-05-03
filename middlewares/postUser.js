const postValidation = (req, res, next) => {
  const { displayName, email } = req.body;
  const regex = /\S+@\S+\.\w{2,3}/;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const postValidationPass = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

module.exports = {
  postValidation,
  postValidationPass,
};
