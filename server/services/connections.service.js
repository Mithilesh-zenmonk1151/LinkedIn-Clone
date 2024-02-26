const connectionModel = require("../models");
const userModel = require("../models");
exports.sendConnectionRequest = async (payload) => {
  try {
    //getting sender id from token
    console.log("user", payload.user);
    const senderId = "65d439ac920eb7189504b036";

    const recieverId = payload.params?.userId;
    // console.log(recieverId, "this is receiver id");
    const request = await connectionModel.create({
      senderId: senderId,
      recieverId: recieverId, //single user
    });
    console.log(request);
  } catch (error) {
    throw error;
  }
};
exports.getConnectionsRequest = async (payload) => {
  try {
    const recieverId = payload.params;
    const requests = await connectionModel.connectionModel
      .find({ recieverId: recieverId })
      .sort({ createdAt: -1 });
    return { requests };
  } catch (error) {
    throw error;
  }
};
exports.setConnectionFlag = async (payload) => {
  try {
    // console.log("user", payload.user);
    const senderId = "65d439ac920eb7189504b036";
    const status = payload.body.status;
    const recieverId = payload.params?.userId;
    // console.log(recieverId, "this is receiver id");
    const user = await connectionModel.connectionModel.findOne({
      senderId: senderId,
      recieverId: recieverId,
    });

    if (status === "accepted") {
        
      const User = await userModel.userModel.findById(senderId);
      for(let i=0; i<userModel.connections.length(); i++){
        if(senderId===userModel.connections[i]){
            return existConnection;
            
        }
        
      }
      if(existConnection){
        return;
      }
      else{
        User.connections.push(recieverId);

      }
     
      await User.save();
      const User2 = await userModel.userModel.findById(recieverId);
      User2.connections.push(senderId);
      await User2.save();
    }
    const isAccepted = await connectionModel.connectionModel.findOne({
      senderId: senderId,
    });
    console.log(isAccepted);
    if (isAccepted.status === "accepted") {
      console.log("already accepted");
      return;
    } else if (isAccepted.status === "rejected") {
    }
    user.status = status;
    await user.save();
    console.log(user, "sttauss,s user");
  } catch (error) {
    throw error;
  }
};
exports.removeConnctionsRequest = async (payload) => {
  try {
    const id = payload.params;
    const removeConnec = await connectionModel.findByIdAndDelete({ id });
  } catch (error) {}
};
exports.getConnectionsLists = async (payload) => {};
