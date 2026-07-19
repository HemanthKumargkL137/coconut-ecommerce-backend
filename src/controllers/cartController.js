const cartService = require("../services/cartService");

exports.getCart = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(200).json({
        success: true,
        message: "Cart fetched successfully",
        data: {
          items: [],
          totalQuantity: 0,
          totalAmount: 0,
        },
      });
    }

    const cart = await cartService.getCart(userId);

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    await cartService.addToCart({
      userId,
      productId,
      quantity,
    });

    const cart = await cartService.getCart(userId);

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product to cart",
      error: error.message,
    });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, quantity } = req.body;

    await cartService.updateQuantity({
      userId,
      cartItemId: id,
      quantity,
    });

    const cart = await cartService.getCart(userId);

    res.status(200).json({
      success: true,
      message: "Cart quantity updated",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update cart",
      error: error.message,
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    await cartService.removeFromCart({
      userId,
      cartItemId: id,
    });

    const cart = await cartService.getCart(userId);

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to remove cart item",
      error: error.message,
    });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const { userId } = req.body;

    await cartService.clearCart(userId);

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
      data: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to clear cart",
      error: error.message,
    });
  }
};
