const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdvertSchema = new mongoose.Schema({
  vehicle: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  price: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  description: {
    type: String
  },
  typeVehicle: {
    type: String,
    default: 'pogruzchik'
  },
  subTypeVehicle: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    default: 'Belarus'
  }
});

module.exports = Advert = mongoose.model('advert', AdvertSchema);
