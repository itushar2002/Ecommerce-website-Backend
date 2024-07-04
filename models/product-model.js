const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Name: String,
  Picture: String,
  Price: Number,
  DiscountPrize: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  PanelColor: String,
  TextColor: String,
});

module.exports = mongoose.model("product", productSchema);
