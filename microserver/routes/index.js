const express = require("express");
const router = express.Router();

router.use("/notification", require("./notificationRoutes"));

module.exports = router;
