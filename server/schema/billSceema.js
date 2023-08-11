const mongoose = require("mongoose");

const BillSceema = mongoose.Schema({
  CoustomerName: String,
  Mobile: Number,
  PaymentMethod: String,
  InvoiceNumber: String,
  Date: Date,
  Products: [
    {
      ProductName: String,
      Product: { type: mongoose.Schema.ObjectId, ref: "Products" },
      Qty: Number,
      Price: Number,
    },
  ],
  SubTotal: Number,
  GrandTotal: Number,
});

const Bill = mongoose.model("Bill", BillSceema);
module.exports = Bill;
