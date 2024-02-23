const { postsModel } = require("../models");
exports.createPosts = async (payload) => {
  console.log('createPosts: ', );
  console.log(payload.body,"post")
  try {
    const userId = req.id;
    const { title, body} = req.body
    console.log(req.body)
    let newImages
    if(req.files.images !== null){
         newImages = req.files.images.map((i) => {return i.path})     
        console.log(newImages)
    }
    const post = new Posts({
        userId,
        title,
        body,
        images: newImages
    })
  
        await post.save()
        return post
    }
    catch(err){
        console.log(err)
        return err
    }
};
exports.getPost = async (payload) => {
  const { userId } = payload.params;
  console.log(userId);
  try {
    const posts = await postsModel.find().sort({ createdAt: -1 });
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.updatePost = async (payload) => {
  const { id } = payload.params;
  const { body, title } = payload.body;

  try {
    const updated = await postsModel.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    console.log(updated);
    return updated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.deletePosts = async (payload) => {
  const { id } = payload.params;
  try {
    const deleted = await postsModel.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
