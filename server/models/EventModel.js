const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  imagePublicId: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
    // required: true
  },
  description: {
    type: String,
    required: true
  },
  registrationLink: {
    type: String,
    required: true
  },
  partners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partner' }] // Referencing Partner
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
