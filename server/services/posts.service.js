const  postsModel = require("../models");
exports.createPosts = async (payload) => {
  try {
    const { id } = payload.params;
    const { title, body } = payload.body;
    const images = payload.files.map((i) => {
       return i.path;
     });
     console.log("images", images);
    const post = await postsModel.postsModel.create({
      title: title,
      body: body,
      user: id,
      images: images,
    });
    console.log("newpost", post);
    post.save();
     post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.getPost = async (payload) => {
  const { id } = payload.params;
  try {
    const post = await postsModel.postsModel.findOne({ userId: id });
    post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.updatePost = async (payload) => {
  const { id } = payload.params;
  const { body, title } = payload.body;
  // console.log(payload.body)
  try {
    const updated = await postsModel.postsModel.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    console.log(updated);
    updated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.deletePosts = async (payload) => {
  const { id } = payload.params;
  try {
    const deleted = await postsModel.postsModel.findByIdAndDelete(id);
    deleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
