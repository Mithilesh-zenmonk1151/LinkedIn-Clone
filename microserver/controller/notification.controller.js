const CustomError = require("../libs/error");
const { notificationService } = require("../service");

exports.createNotification = async (req, res) => {
  try {
    const response = await notificationService.createNotification({
      body: req.body,
      query: req.query,
    });
    // if (!response)
    //     throw new CustomError("User not created", 500);
    return res.status(201).json({ message: "success" });
  } catch (error) {
    //console.log('e: ', e.message);
    return res.status(500).json({ message: error.message });
  }
};
