const mongoose = require("mongoose");
const comment_schema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",

    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    comment:{
        type:String,
        
    }


})
module.exports = mongoose.model("comment-schema",comment_schema);