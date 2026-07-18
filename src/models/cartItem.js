const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const Product = require("./product");

const CartItem = sequelize.define("CartItem", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
}, {
  tableName: "cart_items",
  timestamps: true,
});

CartItem.belongsTo(User, { foreignKey: "userId" });
CartItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

module.exports = CartItem;