const Advert = require('../models/Advert');

exports.queryCreateAdvert = data => {
  try {
    return new Advert(data).save();
  } catch (error) {
    throw new Error(error);
  }
};

exports.queryAdverts = async () => {
  try {
    return await Advert.find();
  } catch (error) {
    throw new Error(error);
  }
};
