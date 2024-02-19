const userModel = require("../models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.signup = async (payload) => {
  try {
    const {  email, password } = payload.body;
    console.log(payload.body);
    const existingUser = await userModel.userModel.findOne({ email });
    //  const existUserName= await User.findOne({username});
    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Aleady Exists!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.userModel.create({
      
      email,
      password: hashedPassword,
    });
    return { user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
exports.login = async (payload, res) => {
  try {
    const { email, password } = payload.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
    const user = await userModel.userModel
      .findOne({ email })
      .populate("additionalDetails")
      .exec();
    if (!user) {
      throw Object.assign(new Error(), {
        name: "INVALIDUSER",
        message: "User Not  Exists!",
      });
    }
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      throw Object.assign(new Error(), {
        name: "INVALIDPASSWORD",
        message: "Wrong Password",
      });
    } 
  } catch (error) {
    console.error(error);
    throw error;
  }
};
exports.getUser = async (payload) => {
  const userId = payload.id;
  let user;
  try {
    user = await userModel.userModel.findById(userId, "-password");
    if (!user) {
      return "User Not Found";
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
};
