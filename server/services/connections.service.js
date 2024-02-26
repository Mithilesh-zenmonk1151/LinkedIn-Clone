const connectionModel = require("../models");
const userModel = require("../models");
exports.sendConnectionRequest = async (payload,senderId) => {
  try {
    //getting sender id from token
    console.log("user", payload.user);
    const senderId = "65d439ac920eb7189504b036";

    const recieverId = payload.params?.userId;
    // console.log(recieverId, "this is receiver id");
    const request = await connectionModel.create({senderId:senderId,
      
      recieverId: recieverId, status:'pending' //single user
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
    const senderId = params;
    const status = payload.body.status;
    const recieverId = payload.params?.userId;
    // console.log(recieverId, "this is receiver id");
    const user = await connectionModel.connectionModel.findOne({
      senderId: senderId,
      recieverId: recieverId,
    });
    if(!status){
      throw res.status(400).json({
        success:false,
        message:"No connection found"
      })
    }
    if (status === 'pending') {
      throw new CustomError("Bad request", 400);
  }
  if (status === 'Withdraw' && response.Status === 'pending') {
      const res = await connectionModel.findOneAndUpdate({ senderId: senderId, _id: connectionId }, { Status: status }, { new: true, upsert: true });
      console.log('res: ', res);
      return res;
  } else if (status === 'accepted' || status === 'rejected') {
      const res = await connectionModel.findOneAndUpdate({ receiverId: recieverId, _id: connectionId }, { Status: status }, { new: true, upsert: true });
      console.log('res: ', res);
      return res;
  } else if (status === 'deleted' && response.Status === 'accepted') {
      const res = await connectionModel.findOneAndUpdate({ $or: [{ _id: connectionId, receiverId: recieverId }, { senderId: senderId, _id: connectionId }] }, { Status: status }, { new: true, upsert: true });
      console.log('res: ', res);
      return res;
  }
    if (status === "accepted") {
        
      const User = await userModel.userModel.findById(senderId);
      
        User.connections.push(recieverId);

      
     
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
exports.getConnectionsLists = async (payload) => {
  try{
    const userId=payload 
   
    const response = await connectionModel.find({ $or: [ { senderId: userId }, { recieverId: userId } ] }); 
   
    const result={};
    let request , connection , reject;
    if(response.length > 0){
        
        request= response.filter((req)=>  { 
           return req.Status=== 'pending' && (req.senderId).toString() === userId});
        console.log('request: ', request);
        connection= response.filter((req)=> {
           return req.Status=== 'accepted' && ((req.receiverId).toString() === userId  || (req.senderId).toString() === userId)});
        reject = response.filter((req)=> {
           return req.Status=== 'deleted' && ((req.receiverId).toString() === userId  || (req.senderId).toString() === userId)});

    }
    result.pendingRequest=request;
    result.connected=connection;
    result.cancel=reject;
    return result;
 
   }
   catch(error){
    console.log(error)
    throw error;
}


};
exports.getSuggestion = async(payload)=>{     //userId from authentication

 
  try{
    const userId= payload;
      const result = await connectionModel.find({$and : [{ $or: [ { senderId: userId }, { receiverId: userId } ] } , { $or: [ { Status: 'rejected' }, { Status: 'deleted' } ] }]}); 
      const _id = [];
      // console.log('userId: ', typeof(userId));
      result?.map((connection)=> {
          
          if((connection.senderId).toString() === userId) _id.push(connection.receiverId);
        
          else ids.push(connection.senderId);
      })
      _id.push(userId)
   const response = await userModel.userModel.find({_id : {$nin : _id} }); 
   return {response};

  }
  catch(error){
   throw error;
}

};

