const orderService = require("../services/orderService");


exports.placeOrder = async (req, res) => {
   try{
     const {userId,addressId} = req.body;

    const order = await orderService.placeOrder({
        userId,
        addressId,
    });

    res.status(201).json({
        success: true,
        message: "Your order has been sucessfully placed",
        data: order,
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Failed to place order",
        error: error.message,
    });
   }
};


exports.getOrders = async (req, res) => {
  try {
    const { userId } = req.query;

    const orders = await orderService.getOrdersByUserId(userId);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderService.getOrderById(id);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
      error: error.message,
    });
  }
};