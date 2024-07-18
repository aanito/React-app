const express = require('express');
const router = express.Router();
const Partner = require('../models/PartnerModel'); // Import the Partner model

// GET endpoint to fetch all partners
router.get('/', async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    res.status(500).json({ message: 'Error fetching partners' });
  }
});

// POST endpoint to add a new partner
router.post('/', async (req, res) => {
  try {
    const { name, logoUrl } = req.body; // Extract partner data from the request body

    const newPartner = new Partner({ name, logoUrl }); // Create a new partner instance

    const savedPartner = await newPartner.save(); // Save the new partner to the database

    res.status(201).json(savedPartner); // Return the saved partner as the response
  } catch (error) {
    console.error('Error adding partner:', error);
    res.status(500).json({ message: 'Error adding partner' });
  }
});

// PUT and DELETE endpoints for updating and deleting partners

module.exports = router;
