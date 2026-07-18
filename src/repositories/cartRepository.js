const CartItem = require("../models/cartItem");
const Product = require("../models/product");

exports.findCartByUserId = async (userId) => {
  return CartItem.findAll({
    where: { userId },
    include: [
      {
        model: Product,
        as: "product",
      },
    ],
    order: [["createdAt", "DESC"]],
  });
};

exports.findCartItemByUserAndProduct = async (userId, productId) => {
  return CartItem.findOne({
    where: { userId, productId },
  });
};

exports.findCartItemById = async (userId, cartItemId) => {
  return CartItem.findOne({
    where: {
      id: cartItemId,
      userId,
    },
  });
};

exports.createCartItem = async (cartData) => {
  return CartItem.create(cartData);
};

exports.updateCartItemQuantity = async (cartItem, quantity) => {
  cartItem.quantity = quantity;
  return cartItem.save();
};

exports.deleteCartItem = async (cartItem) => {
  return cartItem.destroy();
};

exports.clearCartByUserId = async (userId) => {
  return CartItem.destroy({
    where: { userId },
  });
};
