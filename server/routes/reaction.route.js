const express = require("express");
const router = express.Router();
const { reactionController } = require("../controllers");
router.post("/:postId", reactionController.uploadReaction),
  router.get("/:postId", reactionController.fetchReaction),
  router.put("/:reactionId", reactionController.updateReaction),
  router.delete(":reactionId", reactionController.deleteReaction);
module.exports = router;
