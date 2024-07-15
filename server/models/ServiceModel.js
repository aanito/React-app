const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
