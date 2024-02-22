const multer = require("multer");
exports.uploadImage= async(req,res,next)=>{
    console.log('uploadImage: ', );
    const upload = multer({ dest: "./uploads" });
    await upload.array("images")
    next()
}