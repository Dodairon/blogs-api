const modelPost = require('../models/blogPost');
const Category = require('../models/category');
const modelUser = require('../models/user');

async function addPost(title, content, userId, categoryIds) {
    const categoryId = categoryIds.map((id) => Category.findByPk(id));
    const categ = await Promise.all(categoryId);
    const validCategory = categ.find((idNull) => idNull === null);
    if (validCategory === null) {
        throw new Error('"categoryIds" not found');        
    }
    const post = await modelPost.create({
        title,
        content,
        userId,
    });
    post.addCategory(categ);
    return post;
}

async function allPost() {
        const postAll = await modelPost.findAll({
            include: [{
                model: modelUser, as: 'user',
            }, {
                model: Category, as: 'categories',
            }],
        });
        return postAll;
}

module.exports = {
    addPost,
    allPost,
};