const { Model, DataTypes } = require('sequelize');

class BlogPost extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      { sequelize },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    this.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: 'PostsCategories',
    });
  }
}

module.exports = BlogPost;
