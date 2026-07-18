const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const Product = require("../models/product");
const Address = require("../models/address");

exports.createOrder = async (orderData) => {
  return Order.create(orderData);
};

exports.createOrderItems = async (orderItemsData) => {
  return OrderItem.bulkCreate(orderItemsData);
};

exports.findOrdersByUserId = async (userId) => {
  return Order.findAll({
    where: { userId },
    order: [["createdAt", "DESC"]],
  });
};

exports.findOrderById = async (orderId) => {
  return Order.findByPk(orderId, {
    include: [
      {
        model: Address,
        as: "address",
      },
      {
        model: OrderItem,
        as: "items",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
  });
};