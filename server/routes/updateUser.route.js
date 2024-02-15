const express = require("express");
const router = express.Router();
const { updateUserProfileController} = require("../controllers");
router.put("/:id", upload.single("image"),  updateUserProfileController.updateProfile);
module.exports = router;
