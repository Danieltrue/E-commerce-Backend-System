const user = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//@Desc Register a User
//@Route POST api/v1/user/register
//@Access Public
exports.registerUser = async (req, res, next) => {
  try {
    //validate user to find if the data is registered in the database
    const userDataFound = await user.findOne({
      email: req.body.email,
      name: req.body.name,
    });
    console.log(userDataFound);
    if (userDataFound)
      return await res
        .status(401)
        .send(
          `User Already Register with ${req.body.email} and ${req.body.name}`
        );

    //encrypt password data
    let password = bcrypt.hashSync(req.body.password, 10);
    //create the data
    const userData = await user.create({
      name: req.body.name,
      email: req.body.email,
      password,
      street: req.body.street,
      apartment: req.body.apartment,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
    });

    await userData.save();
    await res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//@Desc get a User
//@Route GET api/v1/user/
//@Access Public
exports.getAllUser = async (req, res, next) => {
  try {
    const userData = await user
      .find()
      .select("name email city country phone -_id");

    await res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//@Desc login a user
//@Route POST api/v1/user/login
//@Access Private
exports.loginUser = async (req, res, next) => {
  try {
    //find user in the data base
    const userData = await user.findOne({
      email: req.body.email,
    });

    if (!userData)
      return await res
        .status(401)
        .send(`The Email ${req.body.email} not Found`);

    if (userData && bcrypt.compareSync(req.body.password, userData.password)) {
      let token = jwt.sign({ userId: userData._id }, process.env.SECRET);
      return await res
        .status(200)
        .send({ Message: `Welcome ${userData.name}`, token });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
