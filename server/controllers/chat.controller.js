const { chatService } = require("../services");

exports.sendMessage = async (req, res) => {
  try {
    const response = await chatService.sendMessage(req);
    console.log("Response", response);
    res.status(200).json({
      success: true,
      fullChat: response,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getMessage = async (req, res) => {
  try {
    const response = await chatService.getMessage(req);
    res.status(200).json({
      success: true,
      messages: response,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
exports.createGroupChat = async (req, res) => {
  try {
    const response = await chatService.createGroupChat(req);
    res.status(201).json({
      success: true,
      message: `Group made successfully`,
      fullGroupChat: response,
    });
  } catch (error) {
    console.log("Chat group creation error", error);
    res.status(500).send(error);
  }
};
