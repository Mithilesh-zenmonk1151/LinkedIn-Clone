const posts = require("../models");
exports.createPosts = async (payload) => {
  try {
    const { id } = payload.params;
    const { title, body } = payload.body;
    const images = payload.files.map((i) => {
      return i.path;
    });
    console.log("images", images);
    const post = await posts.postsModel.create({
      title: title,
      body: body,
      user: id,
      images: images,
    });
    console.log("newuser", newuser);
    post.save();
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.getPost = async (payload) => {
  const { id } = payload.params;
  try {
    const post = await posts.postsModel.findOne({ userId: id });
    return post;
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
    const updated = await posts.postsModel.findByIdAndUpdate(
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
    const deleted = await posts.postsModel.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
