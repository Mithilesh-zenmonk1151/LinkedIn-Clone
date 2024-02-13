const User = require("../models/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
exports.signup = async (req) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    // const existUserName= await User.findOne({username});
    if (existingUser) {
      throw {
        success: false,
        message: "User already exists. Please sign in to continue.",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      user,
      message: "User register  successfully",
    });
  } catch (error) {
    console.error(error);
    throw res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
exports.login = async (req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
    const user = await User.findOne({ email })
      .populate("additionalDetails")
      .exec();
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
};
exports.getUser = async (req) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
    if (!user) {
      return "User Not Found";
    } else {
      return user;
    }
  } catch (error) {
    return new Error(error);
  }
};
