require('dotenv').config()
const cloudinary = require('cloudinary').v2;

// (async function() {

// Configuration
cloudinary.config({ 
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.REACT_APP_CLOUDINARY_API_KEY, 
    api_secret: process.env.REACT_APP_CLOUDINARY_APISECRET 
});

module.exports = cloudinary