const express = require('express');

const routes = express.Router();

const { postUser, allUser } = require('../controllers/User');
const { loginUser } = require('../controllers/Login');
const { postValidation, postValidationPass } = require('../middlewares/postUser');
const { loginValidation } = require('../middlewares/login');
const { verifyAuth } = require('../middlewares/getUser');

routes.post('/user', postValidation, postValidationPass, postUser);
routes.post('/login', loginValidation, loginUser);
routes.get('/user', verifyAuth, allUser);

module.exports = routes;
