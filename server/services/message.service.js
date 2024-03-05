const messageModel = require("../models");
const userModel = require("../models");
const chatModel = require("../models/chat.model");
exports.sendMessage = async (payload) => {
  const { content, chatId } = payload.body;
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
  }
  var newMessage = {
    sender: payload.user._id,
    content: content,
    chat: chatId,
  };
  try {
    const message = await messageModel.messageModel.create(newMessage);
    message = await message.populate("sender", "name");
    message = await message.populate("chat");
    message = await userModel.populate(message, {
      path: "chat.users",
      select: "firstName, email",
    });
    await chatModel.findByIdAndUpdate(payload.body.chatId, {
      latestMessages: message,
    });

    return message;
  } catch (error) {
    throw error;
  }
};
exports.getAllMessages = async (payload) => {
  try {
    const messages = await messageModel
      .find({ chat: payload.params.chatId })
      .populate("sender", "name email")
      .populate("chat");
    return messages;
  } catch (error) {
    throw error;
  }
};
