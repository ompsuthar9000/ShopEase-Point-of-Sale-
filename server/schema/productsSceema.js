const mongoose = require("mongoose");
const product_Sceema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product must have name.!"],
  },
  price: {
    type: String,
    required: [true, "products must have price type..!"],
  },
  category: {
    type: String,
    required: [true, "product must belong to category..!"],
  },
  quantity: {
    type: String,
    required: [true, "product category should be required..!"],
  },
  price_inr: {
    type: Number,
    required: [true, "provide price in number format..!"],
  },
  image_url: {
    type: String,
    required: [true, "provide image link"],
  },
});

const Product = mongoose.model("Products", product_Sceema);

module.exports = Product;
