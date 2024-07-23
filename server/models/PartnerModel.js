const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logoPublicId: {
    type: String
    // required: true
  },
  logoUrl: {
    type: String
    // required: true
  },
  // Other details can be added here
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;


// const mongoose = require('mongoose');

// const partnerSchema = new mongoose.Schema({
//   name: String,
//   logoUrl: String,
//   // Other details
// });

// const Partner = mongoose.model('Partner', partnerSchema);
// module.exports = Partner;
