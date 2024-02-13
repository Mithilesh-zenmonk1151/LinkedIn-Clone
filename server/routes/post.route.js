const router = require("express").Router();
const { postsController } = require("../controllers");
const multer = require('multer');
const upload = multer({ dest: './uploads' })
const { auth } = require("../middlewares/auth.middleware");
router.post("/posts/:id",upload.array('images'), auth, postsController.createPosts);
router.get("/posts/:id", auth, postsController.getPost);
router.put("/post/:postId", auth, postsController.updatePost);
 router.delete('/posts/:postId',auth,  postsController.deletePosts);
module.exports = router;
