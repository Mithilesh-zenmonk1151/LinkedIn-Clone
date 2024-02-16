const { reactionServices } = require("../services");
exports.uploadReaction = async (req, res) => {
  try {
    const response = await reactionServices.uploadReaction(req);
    console.log("first", response);
     res.status(200).json(response);
  } catch (error) {
    console.log("");
    res.status(500).json(error);
  }
};
exports.fetchReaction = async (req, res) => {
  try {
    const response = await reactionServices.getReaction(req);
    res.status(200).json(response);
  } catch (err) {
     res.status(500).json(err);
  }
};
exports.deleteReaction = async (req, res) => {
  try {
    const response = await reactionServices.deleteReaction(req);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.updateReaction = async (req, res) => {
  try {
    const response = await reactionServices.updateReaction(req);
     res.status(200).json(response);
  } catch (err) {
     res.status(500).json(err);
  }
};
