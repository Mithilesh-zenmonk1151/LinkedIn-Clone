const router = require("express").Router();
router.use("/", require("./user.route"));
router.use("/", require("./post.route"));
module.exports = router;
