const express = require("express");
const billController = require("./../controllers/billController");
const router = express.Router();

router.route("/createBill").post(billController.bill);
router.route("/Bills").get(billController.getBills);
router.route("/coustomers").get(billController.Coustomers);
router.route("/removecoustomer").post(billController.removeCoustomer);

module.exports = router;
