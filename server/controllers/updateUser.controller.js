const { userServices } = require("../services");
exports.updateProfile = async (req, res) => {
  try {
    const response = await userServices.updateUserProfile(req);
    if (response == "User not found") {
      return res.status(404).json(response);
    } else {
      return res
        .status(e?.code || 500)
        .json({ message: e?.message || "Internal server error" });
    }
  } catch (e) {
    console.log(err);
    return res
      .status(e?.code || 500)
      .json({ message: e?.message || "Internal server error" });
  }
};
