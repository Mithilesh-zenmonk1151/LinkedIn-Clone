const router = require("express").Router();
const {chatController}= require("../controllers")
router.get("/fechchats",chatController.fetchChats);
router.post("/accesschat", chatController.accessChat);
module.exports=router
