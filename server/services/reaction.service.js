const Reaction = require("../models/reaction.model");
exports.showReaction = async (req, res) => {
  const postId = req.params;
  const { userId, emoji } = req.body;
  const reaction = await Reaction.create({ userId, postId, emoji });
  return res.status(200).json({
    success: true,
    reaction,
  });
};
