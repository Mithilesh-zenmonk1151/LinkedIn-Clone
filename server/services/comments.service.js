const commentModel = require("../models");
const postsModel = require("../models");
exports.addComment = async (payload, res) => {
  try {
    const userId = payload.params;
    const { postId, comment } = payload.body;
    const postDetails = await postsModel.postsModel.findOne({
      _id: postId,
    });
    const userComment = await commentModel.commentModel.create({
      userId: userId,
      postId: postId,
      comment,
    });
    await postsModel.postsModel.findByIdAndUpdate(postId, {
      $push: {
        comments: userComment,
      },
    });
    await postDetails.save();
    res.status(201).json({
      success: true,
      message: "Comment Created Successfully",
      userComment,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.getComment = async (payload, res) => {
  try {
    const { postId } = req.params;
    const query = { postId: postId };
    const createAt = req.query.time;
    if (createAt) {
      query = { postId: postId, createAt: { $gte: new Date(createAt) } };
    }
    console.log(postId);
    console.log(postId);
    console.log("first", createAt);
    const commentData = await commentModel.commentModel.find(query)
      .sort({ createdAt: -1 })
      .limit(2)
      .populate({
        path: "user",
        select: "name email ",
      })
      .populate({
        path: "post",
        select: "post",
      })
      .exec();
    console.log(commentData);
    commentData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.editComment = async (payload) => {
  const { commentId } = payload.params;
  console.log(commentId);
  console.log(payload.body);
  const { comment } = payload.body;
  try {
    const updateComment = await commentModel.commentModel.findByIdAndUpdate(
      commentId,
      { comment: comment },
      { new: true }
    );
    updateComment;
  } catch (err) {
    throw err;
  }
};
exports.deleteComment = async (payload) => {
  try {
    const { commentId } = payload.params;
    console.log(commentId);
    const commentDelete = await commentModel.commentModel.findByIdAndDelete(
      commentId
    );
    commentDelete;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
