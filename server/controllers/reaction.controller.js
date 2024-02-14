const { reactionServices } = require("../services");
exports.uploadReaction = async (req, res) => {
  try {
    const response = await reactionServices.uploadReaction(req);
    console.log("first", response);
    return res.status(200).json(response);
  } catch (error) {
    console.log("User not registered");
    return res.status(500).json(error);
  }
};
exports.fetchReaction = async (req, res) => {
  try {
    const response = await reactionServices.getReaction(req);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.deleteReaction = async (req, res) => {
  try {
    const response = await reactionServices.deleteReaction(req);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.updateReaction = async (req, res) => {
  try {
    const response = await reactionServices.updateReaction(req);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};
