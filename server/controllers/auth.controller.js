require("dotenv").config();
const jwt = require("jsonwebtoken");
const { userService } = require("../services");
exports.signup = async (req, res) => {
  try {
    const response = await userService.signup(req);
    if (response.status === 400) {
       res.status(400).json({
        success: false,
        message: "üser allready exists",
      });
    } else {
       res.status(201).json({ message: "user registered succesfylly" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
exports.login = async (req, res) => {
  try {
    const response = await userService.login(req, res);
    if (response.status === 400) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    } else {
      const token = jwt.sign(
        { email: response.email, id: response._id, role: response.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      response.token = token;
      response.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        response,
        message: `User Login Success`,
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
exports.getUser = async (req, res) => {
  try {
    const response = await userService.signup(req);
    if (response == "User Not Found") {
      return res.status(400).json({ response });
    } else {
      return res.status(201).json({ response });
    }
  } catch (err) {
    console.log(err);
  }
};
