const mongoose= require("mongoose");
const User= require("./user.model");
const Chat = require("./chat.model");
const messaageSchema= new mongoose.model({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    content:{
        type:String,
        trim:true
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Chat
    }

},{timestamps:true})
module.exports = mongoose.model("message", messaageSchema);