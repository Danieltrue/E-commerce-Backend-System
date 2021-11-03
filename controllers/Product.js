const product = require("../model/product");
const category = require("../model/category");
//@Desc Add Product
//@Route GET api/v1/product
//@access Private
exports.addProduct = async (req, res, next) => {
  try {
    const categoryData = await category.findOne({ name: req.body.category });
    if (!categoryData)
      return res
        .status(400)
        .send("Category Was not found try adding the category");
    const productData = await product.create({
      name: req.body.name,
      description: req.body.description,
      richDescrption: req.body.richDescrption,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: categoryData._id,
      countInStock: req.body.countInStock,
      rating: req.body.ratings,
      numReview: req.body.numReview,
      isFeatured: req.body.isFeatured,
      dateCreated: new Date(),
    });
    await productData.save();
    await res.status(200).json({
      success: true,
      data: productData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
