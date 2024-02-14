const model = require("../models");
exports.uploadReaction = async (payload) => {
  const { postId } = payload.params;
  const userId = payload.query.userId;
  const { emoji } = payload.body;
  console.log(userId, postId);
  try {
    const newReaction = await model.reactionModel.create({
      userId: userId,
      postId: postId,
      emoji: emoji,
    });
    console.log(newReaction);
    return newReaction;
  } catch (error) {
    console.log(error);
    return error;
  }
};
exports.getReaction = async (payload) => {
  const { postId } = payload.params;
  try {
    const reactionData = await model.reactionModel.find({
      postId: postId,
    });
    console.log("first", reactionData);
    return reactionData;
  } catch (error) {
    throw error;
  }
};

exports.updateReaction = async (payload) => {
  console.log("we are at comment");
  const { reactionId } = payload.params;
  const userId = payload.query.userId;
  const { type } = payload.body;
  const user = await model.reactionModel.findById(reactionId);
  console.log("first", userId == user.userId);
  try {
    if (userId == user.userId) {
      const updateReaction = await model.reactionModel.findByIdAndUpdate(
        reactionId,
        { type: type },
        { new: true }
      );
      return updateReaction;
    }
  } catch (error) {
    throw error;
  }
};

exports.deleteReaction = async (payload) => {
  const { reactionId } = payload.params;
  const userId = payload.query.userId;
  try {
    if (userId == (await model.reactionModel.findById(reactionId).userId)) {
      const deleteReaction = await model.reactionModel.findByIdAndDelete(
        reactionId
      );
      return deleteReaction;
    }
  } catch (error) {
    throw error;
  }
};
