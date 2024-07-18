const express = require('express');
const router = express.Router();
const Testimonial = require('../models/TestimonialModel'); // Import the Testimonial model

// GET endpoint to fetch all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Error fetching testimonials' });
  }
});

// Include other CRUD operations similar to the GET operation defined above

module.exports = router;
