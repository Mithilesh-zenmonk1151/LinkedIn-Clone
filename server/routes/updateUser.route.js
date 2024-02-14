const express = require("express");
const router = express.Router();
const { updateUserProfileController} = require("../controllers");
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
router.put("/:id", upload.single("image"),  updateUserProfileController.updateProfile);
module.exports = router;
