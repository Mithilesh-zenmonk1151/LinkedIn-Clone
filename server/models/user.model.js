const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    additional_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "id",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", user_schema);
