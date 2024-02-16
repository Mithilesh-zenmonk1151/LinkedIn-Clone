const userModel = require("../models");
exports.updateProfile = async (req) => {
  try {
    console.log( req.params);
    const { id } = req.params;
    const { username, phone, website, title, industry, summary } = req.body;
    const address = JSON.parse(req.body.address);
    const image = req.file.path;
    const user = await userModel.userModel.findByIdAndUpdate(
      id,
      {
        username: username,
        address: {
          street: address.street,
          state: address.state,
          city: address.city,
          pincode: address.pincode,
          country: address.country,
        },
        phone: phone,
        website: website,
        image: image,
        title: title,
        summary: summary,
        industry: industry,
      },
      { new: true }
    );
    await user.save();
    const updatedUser= await userModel.userModel.findById(id);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
