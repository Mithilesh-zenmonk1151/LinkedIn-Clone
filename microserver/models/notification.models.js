const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    receiver: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    // content: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true })

module.exports = mongoose.model("notification", NotificationSchema)