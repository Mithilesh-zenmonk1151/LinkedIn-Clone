const chatModel = require("../models");
const userModel = require("../models");
exports.allUser = async (payload) => {
  const keyword = payload.query.search
    ? {
        $or: [
          { firstName: { $regex: payload.query.search, $options: "i" } },
          { email: { $regex: payload.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await userModel.userModel
    .find(keyword)
    .find({ _id: { $ne: payload.user._id } });
  res.send(users);
};
exports.accessChat = async (payload) => {
  const { userId } = payload.body;
  if (!userId) {
    console.log("userId param not sent with request");
    return res.status(400);
  }
  var isChat = await chatModel.chatModel
    .find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: payload.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await UserActivation.populate(isChat, {
    path: "latestMessage.sender",
    select: "firstName email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [payload.user._id, userId],
    };
  }
  try {
    const createdChat = await chatModel.create(chatData);
    const fullChat = await chatModel
      .findOne({ _id: createdChat._id })
      .populate("users", "-password");
    return fullChat;
  } catch (error) {}
};
exports.fetchChats = async (payload) => {
  try {
    chatModel
      .find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await userModel.populate(results, {
          path: "latestMessage.sender",
          select: "firstName, email",
        });
        return results;
      });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

exports.createGroupChat = async (payload) => {
  if (!payload.body.users || !payload.body.firstName) {
    return res.status(400).send({
      message: "please fill all the fields",
    });
  }
  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }
  users.push(payload.user);
  try {
    const groupChat = await chatModel.chatModel.create({
      chatName: payload.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: payload.user,
    });
    const fullGroupChat = await chatModel.chatModel
      .findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    return fullGroupChat;
  } catch (error) {
    throw error;
  }
};
exports.renameGroup = async (payload) => {
  const { chatId, chatName } = payload.body;
  const updatedChat = await chatModel.chatModel
    .findByIdAndUpdate(
      chatId,
      {
        chatName,
      },
      {
        new: true,
      }
    )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
};

exports.addToGroup= async(payload)=>{
    const{chatId, userId}=payload.body;
    const added= chatModel.chatModel.findByIdAndUpdate(
        chatId,
        {
            $push:{users:userId},
        },
        { new: true }
    ).populate("users","-password").populate("groupAdmin","-password");
    if(!added){
        res.status(404);
        throw new Error("chat not found")

    }
    else{
        return added
    }
    

}
exports.removeFromGroup= async(payload)=>{
    const{chatId, userId}=payload.body;
    const remove= chatModel.chatModel.findByIdAndUpdate(
        chatId,
        {
            $pull:{users:userId},
        },
        { new: true }
    ).populate("users","-password").populate("groupAdmin","-password");
    if(!remove){
        res.status(404);
        throw new Error("chat not found")

    }
    else{
        return added
    }
    

}





