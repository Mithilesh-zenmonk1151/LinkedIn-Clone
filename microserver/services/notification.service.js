const customError = require('../utils/error');
const notificationModel = require('../models')
const emitterFile=require('../config/emmiter')
const myEmitter = emitterFile.emitter;
exports.createNotification = async (payload) => {
    const type = payload.query.type
    if (!type)
        throw new customError("Type is empty", 404)
    const { receiver, sender } = payload.body
    if (!receiver, !sender)
        throw new customError("Body is empty", 404)
    console.log('type,receiver,sender: ', type, receiver, sender);
    const data = await notificationModel.create({ type, sender, receiver })
    console.log('data: ', data);
    myEmitter.emit('test',data);
     eventEmitter.emit('start', "start");
}