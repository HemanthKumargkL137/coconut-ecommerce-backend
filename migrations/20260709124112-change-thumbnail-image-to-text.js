"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("products", "thumbnailImage", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("products", "thumbnailImage", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};