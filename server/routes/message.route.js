const router = require("express").Router();
const {messageController}= require("../controllers");
const { authMiddleware } = require("../middlewares");
const { auth } = authMiddleware;



router.post("/",auth,messageController.sendMessage)
router.get("/:chatId",auth,messageController.getAllMessage)

module.exports= router;
