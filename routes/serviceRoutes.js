const express = require('express');
const router = express.Router();
const Service = require('../models/ServiceModel'); // Import the Service model

// Create a new service
router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const newService = new Service({ title, description, imageUrl });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const allServices = await Service.find();
    res.status(200).json(allServices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
