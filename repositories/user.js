const User = require('../models/User');

exports.findUser = async email => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw new Error(err);
  }
};

exports.registerUser = data => {
  try {
    return new User(data).save();
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUserWithoutPassword = async userId => {
  try {
    return await User.findById(userId).select('-password');
  } catch (err) {
    throw new Error(err);
  }
};

exports.updateUser = async data => {
  try {
    return await User.findOneAndUpdate(
      { _id: data._id },
      { $set: data },
      { new: true }
    );
  } catch (err) {
    throw new Error(err);
  }
};

exports.addMyWishQuery = async ({ flatId, userId }) => {
  try {
    const user = await User.findById(userId);
    if (user.wishList.some(i => i._id == flatId)) {
      const removeIndex = user.wishList
        .map(i => i._id.toString())
        .indexOf(flatId);
      user.wishList.splice(removeIndex, 1);
      user.save();
      return user;
    }
    user.wishList.push(flatId);
    user.save();
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
