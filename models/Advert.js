const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdvertSchema = new mongoose.Schema({
  nameVehicle: {
    type: String,
    required: true
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
