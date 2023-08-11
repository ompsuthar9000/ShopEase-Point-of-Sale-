const express = require("express");
const router = express.Router();
const productController = require("../controllers/productscontroller");

router.route("/cat/:category").get(productController.getProductByCat);
router.route("/all").get(productController.getallproducts);

module.exports = router;
