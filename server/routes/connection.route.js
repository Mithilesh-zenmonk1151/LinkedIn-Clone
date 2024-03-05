const router = require("express").Router();
const { connectionController } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const { auth } = authMiddleware;
router.post('/connection', auth, connectionController.sendNewConnection) // userId of person to whom connection request is being send
router.get('/connctionReciever', auth, connectionController.getConnectionReciever)
router.get('/connectionSender', auth, connectionController.getConnectionSender)
router.get('/connections', auth, connectionController.getAllConnections)

router.patch('/:connectionId', auth, connectionController.editConnectionStatus)
router.get('/suggestions', connectionController.getSuggestions)
module.exports = router;
