const usersModel = require("../models");

exports.updateProfile = async (req) => {
  try {
    console.log( req.params);
    const { id } = req.params;
    const { username, phone, website, title, industry, summary } = req.body;
    const address = JSON.parse(req.body.address);
    const image = req.file.path;
    const user = await usersModel.userModel.findByIdAndUpdate(
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
    if (!user) {
      throw new CustomError("User not updated", 403);
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
};
