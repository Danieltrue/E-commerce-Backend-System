const product = require("../model/product");
const category = require("../model/category");
//@Desc Add Product
//@Route POST api/v1/product
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
//@Desc Get Product
//@Route GET api/v1/product/:id
//@Access Public
exports.getSingleProduct = async (req, res, next) => {
  try {
    const productData = await product
      .findOne({ _id: req.params.id })
      .select("name image category -_id")
      .populate("category");

    await res.status(200).json({
      success: true,
      data: productData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc Get All Product
//@Route GET api/v1/product
//@Access Public
exports.getProduct = async (req, res, next) => {
  try {
    let filter = {};

    if (req.query.category) {
      filter = { category: req.query.category.split(",") };
    }
    const productData = await product.find(filter);

    await res.status(200).json({
      success: true,
      data: productData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc update product by id
//@Route PUT api/v1/product/:id
//@Access Private
exports.updateProduct = async (req, res, next) => {
  try {
    const categoryData = await category.findOne({ name: req.body.category });
    if (!categoryData)
      return res
        .status(400)
        .send("Category Was not found try adding the category");
    const productData = await product.findByIdAndUpdate(
      req.params.id,
      {
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
      },
      { new: true }
    );
    await productData.save();
    await res.status(200).json({
      success: true,
      data: productData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc get featured product
//@Route GET api/v1/product/featured
//@Access Public
exports.featuredProduct = async (req, res, next) => {
  try {
    const productData = await product.find({ isFeatured: true });

    await res.status(200).json({
      success: true,
      data: productData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
