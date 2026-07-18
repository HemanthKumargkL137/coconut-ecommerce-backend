const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductImage = sequelize.define(
  "ProductImage",
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

    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    displayOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "productImages",
    timestamps: false,
  }
);

module.exports = ProductImage;