const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductTag = sequelize.define(
  "ProductTag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "productTags",
    timestamps: false,
  }
);

module.exports = ProductTag;