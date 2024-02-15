const router = require("express").Router();
const { updateUserProfileController} = require("../controllers");
router.put("/:id",  updateUserProfileController.updateProfile);
module.exports = router;
