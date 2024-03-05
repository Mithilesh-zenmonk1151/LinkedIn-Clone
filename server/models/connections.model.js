const mongoose = require("mongoose");
const User = require("./user.model");
const connectionsSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "deleted", "withdraw"],
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("connectionSchema", connectionsSchema);
