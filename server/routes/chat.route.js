const router = require("express").Router();
const {chatController}= require("../controllers")
router.get("/:conversationId",chatController.getMessage);
router.post("/message", chatController.sendMessage);
module.exports=router
