const mongoose= require("mongoose");
const User= require("./user.model")
const chatSchema=  new mongoose.Schema({
   chatName:{
    type:String,
    trim:true
   },
   isGroupChat:{
      type:Boolean,
      default:false
   },
   users:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
   }],
   latestMessages:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Message"
   },
  groupAdmin:{
   type:mongoose.Schema.Types.ObjectId,
   ref:User

  },
   isOnline:{
    type:String,
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