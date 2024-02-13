const router = require("express").Router();
const {commentController} = require("../controllers");
const { authMiddleware} =require("../middlewares");

router.post("/",authMiddleware.auth, commentController.addComment);
router.get("/", commentController.getComment);
router.put("/",authMiddleware.auth,commentController.updateComment);
router.delete("/", authMiddleware.auth, commentController.deleteComment);
module.exports= router