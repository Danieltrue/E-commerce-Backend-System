const express = require("express");
const router = express.Router();
//product controller
const {
  addProduct,
  getSingleProduct,
  getProduct,
  updateProduct,
  featuredProduct,
} = require("../controllers/Product");
const {
  addCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} = require("../controllers/Category");
const { registerUser, getAllUser, loginUser } = require("../controllers/User");
//product route
router.route("/product").post(addProduct).get(getProduct);
router.route("/product/featured").get(featuredProduct);
router.route("/product/:id").get(getSingleProduct).put(updateProduct);
//category routes
router.route("/category").post(addCategory).get(getAllCategory);
router
  .route("/category/:id")
  .delete(deleteCategory)
  .get(getCategory)
  .put(updateCategory);
//user route
router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/user").get(getAllUser);

module.exports = router;
