"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("BlogPosts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        }
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BlogPosts");
  },
};
