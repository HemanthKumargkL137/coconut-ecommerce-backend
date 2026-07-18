const express = require("express");
const addressController = require("../controllers/addressController");

const router = express.Router();

router.get("/", addressController.getAddresses);
router.post("/", addressController.createAddress);


module.exports = router;