const { postsModel } = require("../models");
const path = require("path");
exports.createPosts = async (payload) => {
  console.log("createPosts: ");
  console.log(payload.body, "post");
  try {
  
    const userId = payload._id;
    const { title, body} = payload.body;
    const images=payload.files;
    console.log(images,"tjios is the images")
    let newImages
     if(payload.files.images!==null )
       newImages = payload.files.images?.map((image) => {
      console.log(image)
        return image.path;
      })
      console.log(images);
    const post = new postsModel({
      userId,
      title,
      body,
      images: newImages,
    });

    await post.save();
    return { post };
  } catch (error) {
    console.log(error);
    return error;
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
