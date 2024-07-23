const express = require('express');
const router = express.Router();
const Service = require('../models/ServiceModel');
// const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { IncomingForm } = require('formidable');
const cloudinary = require('../cloudinary/cloudinary');



// Set up multer for file uploads
const upload = multer();

// GET endpoint to fetch all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// POST endpoint to add a new service with Cloudinary image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(req.file.path, { folder: 'services' });

    // Create a new Service instance with title, description, and imagePublicId
    const newService = new Service({
      title,
      description,
      imageUrl: uploadedImage.secure_url, // Store the secure URL of the uploaded image
      imagePublicId: uploadedImage.public_id
    });

    // Save the service with the image details
    const savedService = await newService.save();
    
    res.status(201).json(savedService);
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Error adding service' });
  }
});


module.exports = router;
