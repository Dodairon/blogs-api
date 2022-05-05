const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') {
    return res.status(400).json({
      message: '"email" is not allowed to be empty',
    });
  }
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (password === '') {
    return res.status(400).json({
      message: '"password" is not allowed to be empty',
    });
  }
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

module.exports = {
    loginValidation,
  };
