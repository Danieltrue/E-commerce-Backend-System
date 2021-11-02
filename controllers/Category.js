const category = require("../model/category");
//@desc Add Categories
//@Route POST api/v1/category
//@acess Private
exports.addCategory = async (req, res, next) => {
  try {
    res.status(200);
    const categoryData = await category.create({
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
      image: req.body.image,
    });
    await categoryData.save();
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
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
