const router = require("express").Router();
const { commentController } = require("../controllers");
const { authMiddleware } = require("../middlewares");
router.post("/:postId", authMiddleware.auth, commentController.addComment);
router.get("/:postId", commentController.getComment);
router.put("/:commentId", authMiddleware.auth, commentController.updateComment);
router.delete(
  "/:commentId",
  authMiddleware.auth,
  commentController.deleteComment
);
module.exports = router;
