const { userServices } = require("../services");
exports.updateProfile = async (req, res) => {
  try {
    const response = await userServices.updateUserProfile(req);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
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
      success: false,
      message: error.message,
    });
  }
};
