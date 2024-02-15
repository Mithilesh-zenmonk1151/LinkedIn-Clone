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
