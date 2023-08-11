const Bill = require("./../schema/billSceema");
const moment = require("moment");

exports.bill = async (req, res, next) => {
  const products = req.body.products.map(
    (el) =>
      new Object({
        ProductName: el.name,
        Product: el._id,
        Qty: el.prodQTY,
        Price: el.price_inr * el.prodQTY,
      })
  );
  const bill = {
    CoustomerName: req.body.customer.Name,
    Mobile: req.body.customer.Number,
    PaymentMethod: req.body.customer.Payment_Mode,
    InvoiceNumber: `${Date.now()}`,
    Date: moment(new Date()).format("DD/MM/YYYY"),
    Products: products,
    SubTotal: req.body.total.Subtotal,
    GrandTotal: req.body.total.grandtotal,
  };

  await Bill.create(bill).catch((err) => {
    console.log(err);
  });

  res.status(201).json({
    message: "Bill has been created...!",
  });
};

exports.Coustomers = async (req, res) => {
  const coutomers = await Bill.find({}).select({
    CoustomerName: 1,
    Mobile: 1,
    Date: 1,
    id: 1,
  });
  res.status(200).json({
    coutomers,
  });
};

exports.removeCoustomer = async (req, res) => {
  const coutomers = await Bill.findByIdAndDelete(req.body.id);
  res.status(202).json({
    coutomers,
  });
};

exports.getBills = async (req, res) => {
  try {
    const bill = await Bill.find({});
    res.status(200).json({
      bill,
    });
  } catch (error) {
    console.log(error);
  }
};
