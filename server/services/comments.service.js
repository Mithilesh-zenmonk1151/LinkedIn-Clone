const comments = require("../models/comment.model");
const Post= require("../models/posts.model")
exports.addComment = async (req) => {
    try {
        const userId = req.params;
        const { postId, comment } = req.body
        const postDetails= await Post.findOne({
            _id:postId
        })
        const userComment = await comments.create({
            userId: userId,
            postId: postId,
            comment
        })
        await Post.findByIdAndUpdate(postId,{
            $push:{
                comments:userComment,
            }
        })
        await postDetails.save();
        res.status(201).json({
            success: true,
            message: "Comment Created Successfully",
            userComment,
          })
    }
    catch (err) {
        console.log(err)
    }
} 
exports.getComment = async(req)=>{
    try{ const limit = req.query.limit || 10; 
        
        const allComments= await comments.find({})
        .sort({createdAt: -1}).limit(limit).skip()
        .populate({
            path:"user",
            select:"name email "
        })
        .populate({
            path:"post",
            select:"post"
        }).exec();
        res.status(200).json({
            success: true,
            data: allComments,
          })
    }
    catch(error){
        console.log(error);
    }
}
exports.editComment= async(req)=>{
    const {commentId} = req.params; //postId
    console.log(commentId)
    console.log(req.body)
    const {comment} = req.body;
    try{
        const updateComment = await comments.findByIdAndUpdate(commentId,{comment:comment}, {new:true});
        return updateComment;
    }
    catch(err){
        return err;
    }
}
exports.deleteComment= async(req,res)=>{
    try{
        const {commentId}= req.params;
        console.log(commentId);
        const commentDelete= await comments.findByIdAndDelete(commentId);
        return commentDelete
    }
    catch(error){
        console.log(error)
    }
}
