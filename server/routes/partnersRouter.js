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

// Include other CRUD operations similar to the GET operation defined above

module.exports = router;
