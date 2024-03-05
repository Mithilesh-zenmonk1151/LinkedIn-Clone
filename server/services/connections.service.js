const connectionModel = require("../models");
const userModel = require("../models");

exports.sendNewConnection = async (payload) => {
  try {
    console.log(payload.body);
    const userId = payload.user._id;
    const { Id } = payload.body;
    // const {status} = req.body
    const currStatus = await connectionModel.connectionModel.find({
      or: [
        { senderId: userId, recieverId: Id },
        { senderId: Id, recieverId: userId },
      ],
    });
    console.log(currStatus);
    if (currStatus.length > 0) {
      return currStatus;
    } else {
      const connect = new connectionModel({
        senderId: userId,
        recieverId: Id,
      });
      console.log(connect);
      await connect.save();
      return connect;
    }
  } catch (error) {
    throw error;
  }
};

exports.getConnectionReciever = async (payload) => {
  try {
    const userId = payload._id;
    const pending = await connectionModel.connectionModel
      .find({
        status: "pending",
        recieverId: userId,
      })
      .sort({ createdAt: -1 })
      .populate("sender", "name company headline");

    if (pending.length === 0) {
      console.log(pending);
      return 204;
    } else {
      console.log(pending);
      return pending;
    }
  } catch (error) {
    throw error;
  }
};

exports.getConnectionSender = async (payload) => {
  try {
    const userId = payload.id;
    const pending = await connectionModel.commentModel
      .find({
        status: "pending",
        senderId: userId,
      })
      .sort({ createdAt: -1 })
      .populate("recieverId", "name company headline");
    if (pending.length === 0) {
      return 204;
    } else {
      console.log(pending);
      return pending;
    }
  } catch (error) {
    throw error;
  }
};

exports.getAllConnections = async (payload) => {
  try {
    const userId = payload.id;
    const connections = await connectionModel.connectionModel.find({
      status: "accepted",
      $or: [{ senderId: userId }, { recieverId: userId }],
    });
    const total = connections.length;
    if (connections.length === 0) {
      return 204;
    } else {
      return { connections, total };
    }
  } catch (error) {
    throw error;
  }
};
exports.editConnectionStatus = async (payload) => {
  try {
    const userId = payload.id;
    const { Id, status } = payload.body;
    console.log(status);
    if (status === "accepted" || status === "rejected") {
      const newStatus = await connectionModel.connectionModel.findOneAndUpdate(
        { $and: [{ recieverId: userId }, { senderId: Id }] },
        { status: status },
        { new: true }
      );
      return newStatus;
    } else if (status === "withdraw") {
      const newStatus = await connectionModel.connectionModel.findOneAndUpdate(
        { $and: [{ recieverId: Id }, { senderId: userId }] },
        { status: status },
        { new: true }
      );
      return newStatus;
    }
  } catch (error) {
    throw error;
  }
};
exports.getSuggestions = async (payload) => {
  try {
    const userId = payload.id;
    const response = await connectionModel.connectionModel.find({
      $or: [{ senderId: userId }, { recieverId: userId }],
    });
    const users = response.map((i) =>
      i.senderId == userId ? i.recieverId : i.senderId
    );

    users.push(userId);
    console.log(users);
    const suggestions = await userModel.userModel.find(
      { _id: { $nin: users } },
      "-password"
    );
    if (!suggestions) {
      return 404;
    }
    return suggestions;
  } catch (error) {
    throw error;
  }
};
