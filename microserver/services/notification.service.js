const notificationModel = require("../models/notification.models");
exports.sendNotification = async (payload) => {
  try {
    const { senderId, receiverId } = payload.body;
    const newNotification = new notificationModel({
     notificationty
    });
    await newNotification.save();

    return newConversation;
  } catch (error) {
    throw error;
  }
};
