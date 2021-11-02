const express = require("express");
const router = express.Router();
//product controller
const { addProduct } = require("../controllers/Product");
const { addCategory, deleteCategory } = require("../controllers/Category");

router.route("/product").post(addProduct);
//category routes
router.route("/category").post(addCategory);
router.route("/category/:id").delete(deleteCategory);

module.exports = router;
