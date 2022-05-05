const modelCategory = require('../models/category');

async function postCategory(name) {
  if (!name) {
    throw new Error('"name" is required');
  }
  const createCategory = await modelCategory.create({ name });
  return createCategory;
}

async function getAllCategory() {
  const getUser = await modelCategory.findAll();
  return getUser;
}

module.exports = {
    postCategory,
    getAllCategory,
};
