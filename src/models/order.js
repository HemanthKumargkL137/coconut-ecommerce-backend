const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const Address = require("./address");


const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  addressId: { type: DataTypes.INTEGER, allowNull: false },
  totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  paymentMethod: { type: DataTypes.ENUM("COD"), defaultValue: "COD" },
  orderStatus: { type: DataTypes.ENUM("PLACED", "CANCELLED", "DELIVERED"), defaultValue: "PLACED" },
}, {
  tableName: "orders",
  timestamps: true,
});

Order.belongsTo(User, { foreignKey: "userId" });
Order.belongsTo(Address, { foreignKey: "addressId", as: "address" });

module.exports = Order;
