const express = require('express');
const router = express.Router();
const Service = require('../models/ServiceModel');

// GET endpoint to fetch all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find(); // Retrieve all services from the 'services' collection
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// POST endpoint to add a new service
router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body; // Extract service data from the request body

    const newService = new Service({ title, description, imageUrl }); // Create a new service instance

    const savedService = await newService.save(); // Save the new service to the database

    res.status(201).json(savedService); // Return the saved service as the response
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Error adding service' });
  }
});

module.exports = router;
