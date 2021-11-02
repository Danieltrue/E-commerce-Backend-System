const Product = require("../model/product");
//@Desc Add Product
//@Route GET api/v1/product
//@access Private
exports.addProduct = async (req, res, next) => {
  try {
    res.status(200);
    const productData = await Product.create({
      name: req.body.name,
      image: req.body.image,
      countInStock: req.body.countInStock,
    });
    await productData.save();
    console.log(productData);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
