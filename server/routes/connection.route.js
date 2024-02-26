const router = require("express").Router();
const { connectionController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const { auth } = authMiddleware;


router.post("/:userId",auth, connectionController.sendConnectionRequest);
router.get("/",connectionController.getConnectionsRequest);
router.get("/suggestions",connectionController.getSuggestion);
router.get("/connections",connectionController.getConnection);
router.patch("/:userId",connectionController.setConnectionFlag);
module.exports = router;
