const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/", cartController.getCart);
router.post("/add", cartController.addToCart);
router.put("/:id", cartController.updateQuantity);
router.delete("/:id", cartController.removeFromCart);
router.delete("/", cartController.clearCart);

module.exports = router;
