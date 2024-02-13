const mongoose = require("mongoose");
const user= require("./user.model");
const post= require("./posts.model");
const reactionSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:post
    },
    emoji:{
        type:String,
        enum:["Like","Celebrate","Support","Love","Insightful","funny"],
        default:"Like"
    }

},{ timestamps: true })

module.exports = mongoose.model("reaction", reactionSchema);
