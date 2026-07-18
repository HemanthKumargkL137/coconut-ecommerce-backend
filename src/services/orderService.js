const orderRepository = require("../repositories/orderRepository");
const cartRepository = require("../repositories/cartRepository");

exports.placeOrder = async ({userId, addressId}) =>{

    const cart = await cartRepository.findCartByUserId(userId);

    if (cart.length === 0){
        throw new Error("cart is empty");
    }

    let totalAmount = 0;

    cart.forEach((item) => {
        const price = Number(item.product.price);
        totalAmount += price * item.quantity;
    })

    const order = await orderRepository.createOrder({
        userId,
        addressId,
        totalAmount,
        paymentMethod: "COD",
        orderStatus: "PLACED"
    });

    const orderItems = cart.map((item) => {
        const price = Number(item.product.price);

        return {
             orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price,
      subtotal: price * item.quantity,

        }
    })

    await orderRepository.createOrderItems(orderItems);
    const deletedCartItemsCount = await cartRepository.clearCartByUserId(userId);

    return {
        order,
        deletedCartItemsCount,
    };
}

exports.getOrdersByUserId = async (userId) => {
  return orderRepository.findOrdersByUserId(userId);
};


exports.getOrderById = async (orderId) => {
  const order = await orderRepository.findOrderById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};