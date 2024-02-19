const {  userService } = require("../services");
const handleError = require("../utils");

exports.signup = async (req, res) => {
  try {
    const response = await userService.signup(req);
    return res.status(200).json({
      message:"Signup successfull",
      user:  response.user
    });
  } catch (error) {
    console.log(error)
    handleError(res,error)
  }
};

exports.login = async (req, res) => {
  try {
    const response = await userService.login(req, res);
    if (response.status === 400) {
      return  res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
     
    } 
   
  } catch (error) {
    if(error.name === 'INVALIDUSER') {
      return res.status(401).json({
        success: false,
        message: error.message
      })
  }
  if(error.name === 'INVALIDPASSWORD') {
    return res.status(401).json({
      success: false,
      message: error.message
    })
}}
};
exports.getUser = async (req, res) => {
  try {
    const response = await userService.getUser(req);
    if (response == "User Not Found") {
      return res.status(400).json({ response });
    } else {
      return res.status(201).json({ response });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success:false,
      message:error.message
    })

  }
};
