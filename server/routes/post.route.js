const router = require("express").Router();
const { postsController } = require("../controllers");
const { uploadImageMiddleware, authMiddleware } = require("../middlewares");
const { auth } = authMiddleware;
router.post("/", uploadImageMiddleware.uploadImage, postsController.createPosts);
router.get("/", postsController.getPost);
router.put("/:postId", auth, postsController.updatePost);
router.delete("/:postId", auth, postsController.deletePosts);
module.exports = router;
