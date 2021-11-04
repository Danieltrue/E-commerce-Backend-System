const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add you fullname"],
  },
  email: {
    type: String,
    required: [true, "Please add Your Email"],
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please Add a Valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please Add your Email to Protect Your Data"],
  },
  street: {
    type: String,
    default: "",
  },
  apartment: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  zip: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    match: [
      /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      "Please Input a valid Phone Number",
    ],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
