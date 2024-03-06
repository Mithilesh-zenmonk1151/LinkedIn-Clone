const mongoose = require("mongoose");
const User = require("./user.model");
const Chat = require("./chat.model");
const messaageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
    },
    members:{
      type:Array
    },
    message: {
      type: String,
      trim: true,
    },
    conversationId: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("message", messaageSchema);
