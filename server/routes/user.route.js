const router = require("express").Router();
const { updateUserProfileController } = require("../controllers");
router.get("/user", updateUserProfileController.getUser);
router.put("/:id", updateUserProfileController.updateProfile);
module.exports = router;
