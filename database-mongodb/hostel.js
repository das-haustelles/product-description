const mongoose = require('mongoose');
// const db = require('./index.js');

mongoose.Promise = global.Promise;

const hostelSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    propertyDescription: String,
    houseRules: {
      checkInCheckOut: [],
      policies: [],
      cancellation_policy: '',
      things_to_note: []
    }
  },
  {
    timestamps: true
  }
);

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
