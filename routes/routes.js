const express = require('express');

const routes = express.Router();

const { postUser } = require('../controllers/User');
const { postValidation, postValidationPass } = require('../middlewares/postUser');

routes.post('/user', postValidation, postValidationPass, postUser);

module.exports = routes;
