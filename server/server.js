const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productsroutes");
const billRoutes = require("./routes/billRoutes");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(cookieparser());

const url = `mongodb+srv://sutharom42:${process.env.DB_PASSWORD}@pointofsale.deo6krp.mongodb.net/`;

mongoose.connect(url).then(console.log("Database hasbeen connected..!"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is runing on ${port}`);
});

app.use("/products", productRoutes);
app.use("/bill", billRoutes);

module.exports = app;
