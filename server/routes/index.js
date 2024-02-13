const router = require("express").Router();
router.use("/user", require("./user.route"));
router.use("/post", require("./post.route"));
router.use("/comment",require("./comment.route"))
module.exports = router;
