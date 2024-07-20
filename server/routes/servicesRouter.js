const express = require('express');
const router = express.Router();
const Service = require('../models/ServiceModel');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const { Readable } = require('stream');
const mongoose = require('mongoose');

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = new GridFSBucket(conn.db, {
    bucketName: 'images'
  });
});

const upload = multer().single('image');

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

// POST endpoint to add a new service with image upload
router.post('/', upload, async (req, res) => {
  try {
    const { title, description, imageData } = req.body;
    const newService = new Service({ title, description });

    if (imageData) {
      const savedService = await newService.save();

      savedService.image.data = imageData; // Store the base64 encoded image data
      savedService.image.contentType = 'image/png'; // Update the content type as per your requirements
      await savedService.save();

      res.status(201).json(savedService);
    } else {
      const savedService = await newService.save();
      res.status(201).json(savedService);
    }
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Error adding service' });
  }
});

module.exports = router;
