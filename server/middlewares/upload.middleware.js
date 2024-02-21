const multer = require("multer");
exports.uploadImage= async()=>{
    const upload = multer({ dest: "./uploads" });
    await upload.array("images")
 
    res.send("Uploaded")
    console.log(req.body);
    const imageName=req.file.filename;
    try{
        await Images.create({image:imageName})
        res.json({status:"ok"})

    }catch(error){
        res.json({
            status:false,
            message:error
        })


    }

}