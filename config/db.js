const mongoose = require("mongoose");

module.exports = async function connecDB() {
  await mongoose.connect(process.env.DB_KEY, () => {
    console.log(`MongoDB Database Connected`.bgGreen.white);
  });
};
