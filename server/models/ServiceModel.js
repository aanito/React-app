const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePublicId: { type: String }, // Store the public ID of the image in Cloudinary
  imageUrl: { type: String } // Store the URL of the image in Cloudinary
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;


// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const serviceSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   image: {
//     data: Buffer, // Store the image data as binary data
//     contentType: String // Store the content type of the image
//   }
// });

// const Service = mongoose.model('Service', serviceSchema);

// module.exports = Service;
