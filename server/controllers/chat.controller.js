const { chatService } = require("../services");

exports.accessChat = async (req, res) => {
  try {
    const response = await chatService.accessChat(req);
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
exports.fetchChats = async (req, res) => {
  try {
    const response = await chatService.fetchChats(req);
    res.status(200).json({
      success: true,
      results: response,
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
