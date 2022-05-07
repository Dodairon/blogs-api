const post = require('../services/Post');

async function addPost(req, res) {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    try {
        const postAdd = await post.addPost(title, content, userId, categoryIds);
        res.status(201).json(postAdd);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function allPost(req, res) {
    try {
        const postAll = await post.allPost();
        console.log(postAll);
        res.status(200).json(postAll);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    addPost,
    allPost,
};