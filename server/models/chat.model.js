const mongoose= require("mongoose");
const chatSchema=  new mongoose.Schema({
   chatName:{
    type:String
   },
   message:{
    type:String,
   },
   isOnline:{
    type:string,
    default:"0"
   },
   senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
   },
   receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
   }


},{timestamps:true})

module.exports = mongoose.model("chat", chatSchema);