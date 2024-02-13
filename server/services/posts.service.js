const { Posts } = require("../models/posts.model");
exports.createPosts = async (req) => {
 
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    
    const images = req.files.map((i) => { return i.path }); 
    console.log('images' , images)
    const post = await PostModel.create({title:title,body:body,user:id,images:images});
    console.log('newuser', newuser)

    post.save();
    return post;
  } catch (err) {
    console.log(err);
  }
};
exports.getPost = async (req) => {
  const { id } = req.params;
  try {
    

    const post =await Posts.findOne({ userId: id });
    return post;
  } catch (err) {
    console.log(err);
  }
};
exports.updatePost = async (req) => {
  const { id } = req.params;
  const { body, title } = req.body;
  // console.log(req.body)
  try {
    const updated = await Posts.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    console.log(updated);
    return updated;
  } catch (err) {
    console.log(err);
  }
};
exports.deletePosts = async (req) => {
  const { id } = req.params;
  try {
    const deleted = await Posts.findByIdAndDelete(id);
    return deleted;
  } catch (err) {
    console.log(err);
  }
};
