const { route } = require("./reaction.route");
const router = require("express").Router();
router.use("/user", require("./user.route"));
router.use("/post", require("./post.route"));
router.use("/comment", require("./comment.route"));
router.use("/reaction", require("./reaction.route"));
router.use("/user",require("./updateUser.route"))
module.exports = router;
