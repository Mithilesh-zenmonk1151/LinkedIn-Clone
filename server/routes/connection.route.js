const router = require("express").Router();
const { connectionController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const { auth } = authMiddleware;


router.post("/:userId", connectionController.sendConnectionRequest);
router.get("/",connectionController.getConnectionsRequest);
router.patch("/:userId",connectionController.setConnectionFlag);

module.exports = router;
