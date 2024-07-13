const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: String,
  logoUrl: String,
  // Other details
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;
