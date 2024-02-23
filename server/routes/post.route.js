const router = require("express").Router();
const { postsController } = require("../controllers");
const {  authMiddleware } = require("../middlewares");
const {upload} =require("../middlewares/upload.middleware") 
const { auth } = authMiddleware;

router.post("/", upload, postsController.createPosts);
router.get("/", postsController.getPost);
router.put("/:postId", auth, postsController.updatePost);
router.delete("/:postId", auth, postsController.deletePosts);
module.exports = router;
