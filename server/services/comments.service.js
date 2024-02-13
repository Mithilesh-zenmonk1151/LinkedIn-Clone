const comments = require("../models/comment.model");

exports.createComment() = async (req, res) => {
    try {
        const userId = req.params;
        const { post_id, comment } = req.body
        const userComment = await comments.create({
            userId: userId,
            post_id: post_id,
            comment
        })
        userComment.save()
        return userComment
    }
    catch (err) {
        console.log(err)
    }
} 
