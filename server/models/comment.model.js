const mongoose = require("mongoose");
const user= require("./user.model");
const commentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:user,
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:post
    },
    
    comment:{
        type:String,
    }
},{timestamps:true})
module.exports = mongoose.model("comment-schema",commentSchema);