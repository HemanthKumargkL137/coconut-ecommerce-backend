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
    // NOTE: The database table name is explicitly set to "productImages"
    // (camelCase) to match the table created in
    // migrations/20260713091500-create-product-images-tags-product-tags.js.
    // Some database engines/tools normalize unquoted identifiers to
    // lowercase (e.g. "productimages"), which can cause a mismatch with
    // this model. If you encounter a "relation does not exist" error,
    // verify the actual table name in the database and either rename the
    // table to "productImages" or update this tableName option to match.
    tableName: "productImages",
    timestamps: false,
  }
);

module.exports = ProductImage;