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

// POST endpoint to add a new service
router.post('/', async (req, res) => {
  try {
    const { title, description, imagePublicId, imageUrl } = req.body;

    // Create a new Service instance with the extracted service details
    const newService = new Service({
      title,
      description,
      imagePublicId,
      imageUrl
    });

    // Save the service with the provided image details
    const savedService = await newService.save();
    
    res.status(201).json(savedService);
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Error adding service' });
  }
});

module.exports = router;
