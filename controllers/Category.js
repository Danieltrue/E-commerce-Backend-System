const category = require("../model/category");
//@desc Add Categories
//@Route POST api/v1/category
//@acess Private
exports.addCategory = async (req, res, next) => {
  try {
    res.status(200);

    const categoryData = await category.create({
      name: req.body.name.toLowerCase(),
      color: req.body.color.toLowerCase(),
      icon: req.body.icon.toLowerCase(),
      image: req.body.image.toLowerCase(),
    });
    await categoryData.save();
    await res.status(200).json({
      success: true,
      data: categoryData,
    });
  } catch (err) {}
};
//@desc delete Categories
//@Route DELETE api/v1/category:id
//@acess Private
exports.deleteCategory = async (req, res, next) => {
  try {
    const catgoryData = await category.findOne({ _id: req.params.id });
    console.log(catgoryData);
    catgoryData.remove();
    await res.status(200).json({
      success: true,
      data: categoryData,
    });
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
};
//@Desc Get All Caterogy
//@Route GET api/v1/category
//@Access Public
exports.getAllCategory = async (req, res, next) => {
  try {
    const categoryData = await category.find();

    await res.status(200).json({
      success: true,
      data: categoryData,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//@Desc Get Single Categoru
//@Route GET api/v1/category/:id
//@Access Public
exports.getCategory = async (req, res, next) => {
  try {
    const categoryData = await category.findById(req.params.id);

    await res.status(200).json({
      success: true,
      data: categoryData,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//@Desc Update the Category
//@Route PUT api/v1/category/:id
//@Access Public
exports.updateCategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const categoryData = await category.findByIdAndUpdate(req.params.id, {
      name: req.body.name.toLowerCase(),
      color: req.body.color.toLowerCase(),
      icon: req.body.icon.toLowerCase(),
      image: req.body.image.toLowerCase(),
    });

    await res.status(200).json({
      success: true,
      data: categoryData,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
