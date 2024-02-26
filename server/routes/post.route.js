const router = require("express").Router();
const { postsController } = require("../controllers");
const {  authMiddleware } = require("../middlewares");
const multer = require('multer');
const upload = multer({ dest: './uploads' })
// const {upload} =require("../middlewares/upload.middleware"); 
const { auth } = authMiddleware;
router.post("/", upload.array('images'),postsController.createPosts);
router.get("/", postsController.getPost);
router.put("/:postId", auth, postsController.updatePost);
router.delete("/:postId", auth, postsController.deletePosts);
module.exports = router;
