const reactionModel = require("../models");
exports.uploadReaction = async (payload) => {
  const { postId } = payload.params;
  const userId = payload.query.userId;
  const { emoji } = payload.body;
  console.log(userId, postId);
  try {
    const newReaction = await reactionModel.reactionModel.create({
      userId: userId,
      postId: postId,
      emoji: emoji,
    });
    console.log(newReaction);
     newReaction;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.getReaction = async (payload) => {
  const { postId } = payload.params;
  try {
    const reactionData = await reactionModel.reactionModel.find({
      postId: postId,
    });
    console.log("first", reactionData);
     reactionData;
  } catch (error) {
    throw error;
  }
};
exports.updateReaction = async (payload) => {
  console.log("we are at comment");
  const { reactionId } = payload.params;
  const userId = payload.query.userId;
  const { type } = payload.body;
  const user = await reactionModel.reactionModel.findById(reactionId);
  console.log("first", userId == user.userId);
  try {
    if (userId == user.userId) {
      const updateReaction = await reactionModel.reactionModel.findByIdAndUpdate(
        reactionId,
        { type: type },
        { new: true }
      );
       updateReaction;
    }
  } catch (error) {
    throw error;
  }
};
exports.deleteReaction = async (payload) => {
  const { reactionId } = payload.params;
  const userId = payload.query.userId;
  try {
    if (userId == (await reactionModel.reactionModel.findById(reactionId).userId)) {
      const deleteReaction = await reactionModel.reactionModel.findByIdAndDelete(
        reactionId
      );
      deleteReaction;
    }
  } catch (error) {
    throw error;
  }
};
