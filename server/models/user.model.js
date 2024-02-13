const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
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
      sparse:true
    },
    password: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "id",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
