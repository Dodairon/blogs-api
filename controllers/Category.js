const serviceCategory = require('../services/Category');

async function postCategory(req, res) {
    const { name } = req.body;
    try {
      const categories = await serviceCategory.postCategory(
        name,
      );
      res.status(201).json(categories);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async function getAllCategory(req, res) {
    try {
      const getCategory = await serviceCategory.getAllCategory();
      res.status(200).json(getCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  module.exports = {
    postCategory,
    getAllCategory,
  };