const mongoose = require("mongoose");
const messaageSchema = new mongoose.Schema(
  {
    receiverId: {
      type: Array,
    },
    senderId: {
      type: Array,
    },
notificationType:{
    type:String,
    enum:["post","comment","reaction","connection"]
}
  },
  { timestamps: true }
);
module.exports = mongoose.model("message", messaageSchema);
