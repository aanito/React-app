const express = require('express');
const router = express.Router();
const Partner = require('../models/PartnerModel');

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
    const { name, logoPublicId, logoUrl } = req.body;

    const newPartner = new Partner({
      name,
      logoPublicId,
      logoUrl
    });

    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    console.error('Error adding partner:', error);
    res.status(500).json({ message: 'Error adding partner' });
  }
});

module.exports = router;
