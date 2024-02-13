const router = require("express").Router();
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const { auth } = require("../middlewares/auth.middleware");
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/user", authMiddleware.auth, userController.getUser);
module.exports = router;
