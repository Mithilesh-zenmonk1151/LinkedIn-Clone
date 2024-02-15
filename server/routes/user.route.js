const router = require("express").Router();
const { userController } = require("../controllers");
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/user", userController.getUser);
module.exports = router;
