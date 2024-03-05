const { messageService } = require("../services");
exports.sendMessage = async (req, res) => {
  try {
    const response = await messageService.sendMessage(req);

    console.log(response);
    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      message: response,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getAllMessage = async (req, res) => {
  try {
    const response = await messageService.getAllMessages(req);
    return res.status(200).json({
      success: true,
      messages: response,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};