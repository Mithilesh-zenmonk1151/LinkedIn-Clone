const mongoose = require("mongoose");
const User = require("./user.model");
const Chat = require("./chat.model");
const messaageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("message", messaageSchema);
