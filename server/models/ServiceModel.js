const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create a new schema for the Service model
const serviceSchema = new Schema({
  title: String,
  description: String,
  image: {
    data: String, // Store the base64 encoded image data as string
    contentType: String // Define the content type of the image
  }
});

// Create a Mongoose model for the Service schema
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
