const router = require("express").Router();
const { postsController } = require("../controllers");
const { auth } = require("../middlewares/auth.middleware");
router.post("/post", auth, postsController.createPosts);
router.get("/get-post", auth, postsController.getPost);
router.put("/post/:id", auth, postsController.updatePost);
// router.delete('/post:id', auth, deletePost);
module.exports = router;
