const {postsModel} = require("../models");
exports.createPosts = async (payload) => {
  try {
    
    const { userId, title, body } = payload.body;
    // const images = payload.files.map((i) => {
    //    return i.path;
    //  });
    //  console.log("images", images);
    const post = await postsModel.create({
      title: title,
      body: body,
      userId: userId,
       // images: images,
    });
    console.log("newpost", post);
    post.save();
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.getPost = async (payload) => {
  const { userId } = payload.params;
  console.log(userId)
  try {
    const posts = await postsModel.find().sort({createdAt :-1});
    console.log(posts);
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