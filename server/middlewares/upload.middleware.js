const multer = require("multer");

exports.upload = multer({
  storage: multer.diskStorage({
    destination: (req, file,cb) => {
      return cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      return cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}).single("images")

