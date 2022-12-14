const express = require('express');

const routes = express.Router();

const { postUser, allUser, getId } = require('../controllers/User');
const { loginUser } = require('../controllers/Login');
const { postValidation, postValidationPass } = require('../middlewares/postUser');
const { loginValidation } = require('../middlewares/login');
const { verifyAuth } = require('../middlewares/getUser');
const { postCategory, getAllCategory } = require('../controllers/Category');
const { addPost, allPost } = require('../controllers/Post');
const { postValidations } = require('../middlewares/blogPost');

routes.post('/user', postValidation, postValidationPass, postUser);
routes.post('/login', loginValidation, loginUser);
routes.get('/user', verifyAuth, allUser);
routes.get('/user/:id', verifyAuth, getId);
routes.post('/categories', verifyAuth, postCategory);
routes.get('/categories', verifyAuth, getAllCategory);
routes.post('/post', verifyAuth, postValidations, addPost);
routes.get('/post', verifyAuth, allPost);

module.exports = routes;
