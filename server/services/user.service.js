const userModel = require("../models");
exports.updateUserProfile = async (payload) => {
  try {
    console.log(payload.params);
    const { id } = payload.params;
    const { username, phone, website, title, industry, summary } = payload.body;
    if (req.body.address) {
      var { street, state, city, pincode, country } = req.body.address;
    }
    // const image = req.file.path;
    const user = await userModel.userModel.findByIdAndUpdate(
      id,
      {
        username: username,
        address: { street, state, city, pincode, country },
        phone: phone,
        website: website,
        // image: image,
        title: title,
        summary: summary,
        industry: industry,
      },
      { new: true }
    );
    await user.save();
    const updatedUser = await userModel.userModel.findById(id);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

exports.getUser = async (payload) => {
  console.log("get user service")
  const userId = payload.params.id;
  console.log("userId",userId)
  let user;
  try {
   

    user = await userModel.userModel.findById(userId, "-password");
    if (!user) {
      return "User Not Found";
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
};

// onsole.log("hjdfv" ,req.params)
//         console.log("file" ,req.file)
//         const { id } = req.params;
//     const { username, phone, website, title, industry, summary } = req.body;
//     if (req.body.address) {
//         var { street, state, city, pincode, country } = req.body.address;
//     }
//     const image = req.file.path;
//         const user = await UsersModel.findByIdAndUpdate(id, {
//             username: username,
//             address: { street, state, city, pincode, country },
//             phone: phone,
//             website: website,
//             image: image,
//             title: title,
//             summary: summary,
//             industry: industry
//         },{new:true});
//         if (!user) {
//             throw new CustomError('User not updated' , 404)
//         } else {
//             return user
//         }
