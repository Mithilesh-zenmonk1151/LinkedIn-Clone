const router = require("express").Router();
const {messageController}= require("../controllers");
const { authMiddleware } = require("../middlewares");
const { auth } = authMiddleware;



router.post("/",messageController.sendMessage)
router.get("/:userId",messageController.getAllMessage)

module.exports= router;
