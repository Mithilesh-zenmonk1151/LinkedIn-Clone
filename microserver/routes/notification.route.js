const express = require('express');
const { notificationController } = require('../controller');
const router = express.Router();

router.post('/',notificationController.createNotification)
module.exports = router;