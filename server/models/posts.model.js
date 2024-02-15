const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const user = require("./user.model");
const comment = require("./comment.model");
const postsSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: user,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: comment,
      },
    ],
   images: {
       type: Array,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("posts", postsSchema);
