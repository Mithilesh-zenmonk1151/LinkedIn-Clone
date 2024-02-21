const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("you are in the root route.");
});
router.use("/auth", require("./auth.route"));
router.use("/posts", require("./post.route"));
router.use("/comments", require("./comment.route"));
router.use("/reactions", require("./reaction.route"));
router.use("/users", require("./user.route"));
module.exports = router;
