const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Add The Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Give a Description about your product"],
  },
  richDescrption: {
    type: String,
  },
  image: {
    type: String,
    required: [true, "Please add a Thumbnail image"],
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "How Much Does Your Product Cost?"],
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  countInStock: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
  },
  numReview: {
    type: Number,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("product", ProductSchema);
