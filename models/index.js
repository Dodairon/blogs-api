const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const User = require('../models/user');
const BlogPost = require('../models/blogPost');
const Category = require('../models/category');

const connection = new Sequelize(dbConfig.development);

User.init(connection);
BlogPost.init(connection);
Category.init(connection);

BlogPost.associate(connection.models)
Category.associate(connection.models)

module.exports = connection;