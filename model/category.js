const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add the name of a category"],
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("category", CategorySchema);
