const order = require("../model/order");
const product = require("../model/product");
const user = require("../model/user");
//@Desc Place Order
//@Route api/v1/order
//@Access Public
exports.placeOrder = async (req, res, next) => {
  try {
    //search for theproduct you want to purchase
    const productData = await product.findOne({ name: req.body.orderitem });
    if (!productData) return res.status(404).send("Product Was Not Found");
    const userData = await user.findOne({ name: req.body.user });
    if (!userData) return res.status(404).send("User Was Not Found");

    const orderData = await order.create({
      orderitem: productData._id,
      quantity: req.body.quantity,
      shippingaddress: req.body.shippingaddress,
      shippingaddress2: req.body.shippingaddress2,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      status: req.body.status,
      totalprice: req.body.totalprice,
      user: userData._id,
      dateordered: req.body.dateordered,
    });
    await orderData.save();

    await res.status(200).send({
      success: true,
      data: orderData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc Get Order
//@Route api/v1/order
//@Access Private
exports.getOrder = async (req, res, next) => {
  try {
    const orderData = await order
      .find()
      .populate("user", "name -_id")
      .populate("orderitem", "name -_id");

    res.status(200).send({
      success: true,
      data: orderData,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc Change the Order Status
//@Route api/v1/order/:id
//@Access Private
exports.changeOrderStatus = async (req, res, next) => {
  try {
    const orderData = await order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    if (!orderData) res.status(404).send("Order Not Found");
    res.status(200).send(orderData);
  } catch (err) {
    res.status(500).send(err);
  }
};
//@Desc Delete the Order
//@Route api/v1/order/:id
//@Access Private
exports.deleteOrder = async (req, res, next) => {
  try {
    const orderData = await order.findByIdAndDelete(req.params.id);
    if (!orderData) res.status(404).send("Order Not Found");
    res.status(200).send(orderData);
  } catch (err) {
    res.status(500).send(err);
  }
};
