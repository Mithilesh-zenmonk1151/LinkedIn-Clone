
const { userService } = require("../services");
exports.signup = async (req, res) => {
  try {
    // const response = await userService.signup(req);
    // if (response.status === 400) {
    //    res.status(400).json({
    //     success: false,
    //     message: "user allready exists",
    //   });
    //  } else {
    //   return res.status(201).json({ message: "user registered succesfylly" });
    //  }
    const response = await userService.signup(req);
   
    return res.status(200).json({
      message:"Signup successfull",
      user:  response.user
    });
  } catch (error) {
    console.log(error)
    if(error.name === 'CONFLICT') {
      return res.status(409).json({
        success: false,
        message: error.message
      })
    }}
};
exports.login = async (req, res) => {
  try {
    const response = await userService.login(req, res);
    if (response.status === 400) {
      return res.status(400).json({
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
