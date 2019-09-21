require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    useMongoClient: true,
      await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

    console.log('MongoDB Connected ...');
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
