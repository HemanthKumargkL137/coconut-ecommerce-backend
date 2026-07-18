const cartRepository = require("../repositories/cartRepository");

exports.getCart = async (userId) => {
  const cartItems = await cartRepository.findCartByUserId(userId);

  let totalQuantity = 0;
  let totalAmount = 0;

  cartItems.forEach((item) => {
    const price = Number(item.product.price);
    totalQuantity += item.quantity;
    totalAmount += price * item.quantity;
  });

  return {
    items: cartItems,
    totalQuantity,
    totalAmount,
  };
};

exports.addToCart = async ({ userId, productId, quantity }) => {
  const existingItem = await cartRepository.findCartItemByUserAndProduct(
    userId,
    productId
  );

  if (existingItem) {
    const newQuantity = existingItem.quantity + Number(quantity);

    return cartRepository.updateCartItemQuantity(existingItem, newQuantity);
  }

  return cartRepository.createCartItem({
    userId,
    productId,
    quantity,
  });
};

exports.updateQuantity = async ({ userId, cartItemId, quantity }) => {
  const cartItem = await cartRepository.findCartItemById(userId, cartItemId);

  if (!cartItem) {
    throw new Error("Cart item not found");
  }

  return cartRepository.updateCartItemQuantity(cartItem, quantity);
};

exports.removeFromCart = async ({ userId, cartItemId }) => {
  const cartItem = await cartRepository.findCartItemById(userId, cartItemId);

  if (!cartItem) {
    throw new Error("Cart item not found");
  }

  return cartRepository.deleteCartItem(cartItem);
};

exports.clearCart = async (userId) => {
  return cartRepository.clearCartByUserId(userId);
};
