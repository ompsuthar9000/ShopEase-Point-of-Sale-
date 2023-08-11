const Product = require("../schema/productsSceema");
const { otpsender, otpverify } = require("../utils/OTP");

exports.getallproducts = async (req, res) => {
  const product = await Product.find().catch((err) => {
    console.log(err);
  });

  res.status(200).json({
    message: "Success",
    data: {
      product,
    },
  });
};

exports.getProductByCat = async (req, res) => {
  const { category } = req.params;
  const product = await Product.find({ category }).catch((err) => {
    console.log(err);
  });
  res.status(200).json({
    message: "Success",
    data: {
      product,
    },
  });
};
