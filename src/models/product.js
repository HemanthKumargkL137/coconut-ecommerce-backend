const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./category");
const ProductImage = require("./productImage");
const Tag = require("./tag");
const ProductTag = require("./productTag");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    discountPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    thumbnailImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Product.hasMany(ProductImage, {
  foreignKey: "productId",
  as: "productImages",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "productId",
  otherKey: "tagId",
  as: "tags",
});


module.exports = Product;