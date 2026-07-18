const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/place", orderController.placeOrder);
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrderById);

module.exports = router;