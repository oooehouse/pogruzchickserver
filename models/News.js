const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: String
  },
  video: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = News = mongoose.model('news', NewsSchema);
