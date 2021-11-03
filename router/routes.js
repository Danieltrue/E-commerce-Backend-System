const express = require("express");
const router = express.Router();
//product controller
const { addProduct } = require("../controllers/Product");
const {
  addCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} = require("../controllers/Category");

router.route("/product").post(addProduct);
//category routes
router.route("/category").post(addCategory).get(getAllCategory);
router
  .route("/category/:id")
  .delete(deleteCategory)
  .get(getCategory)
  .put(updateCategory);

module.exports = router;
