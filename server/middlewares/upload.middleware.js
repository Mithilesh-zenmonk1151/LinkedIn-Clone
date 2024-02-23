const multer = require("multer");

exports.upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      return cb(null, `${Date.now()}_${file.originalname}`);

    },

  }),
}).fields(
    [{ name: "image1", maxCount: 4 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },]
    
);
