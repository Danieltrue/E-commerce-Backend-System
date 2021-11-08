const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  orderitem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: [true, "Pleas What is the product"],
    },
  ],
  quantity: {
    type: Number,
    default: 1,
  },
  shippingaddress: {
    type: String,
    required: [true, "Please Your Shipping Address"],
  },
  shippingaddress2: {
    type: String,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: Number,
  },
  status: {
    type: String,
    default: "Pending",
  },
  totalprice: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dateordered: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("order", Order);
