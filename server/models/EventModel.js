const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  image: String,
  description: String,
  registrationLink: String,
  partners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Partner' }] // Referencing Partner
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
