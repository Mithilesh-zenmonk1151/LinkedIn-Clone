const mongoose = require("mongoose");
const {ObjectId } = require('mongodb')
const posts_schema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: "users",
    },

    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("posts", posts_schema);
