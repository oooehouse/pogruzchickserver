const News = require('../models/News');

exports.queryCreateNews = data => {
  try {
    return new News(data).save();
  } catch (error) {
    throw new Error(error);
  }
};

exports.queryNews = async () => {
  try {
    return await News.find();
  } catch (error) {
    throw new Error(error);
  }
};
