const multer = require("multer");
exports.uploadImage= async()=>{
    const upload = multer({ dest: "./uploads" });
    await upload.array("images")
}