const express = require('express');
const router = express.Router();
const Event = require('../models/EventModel'); // Import the Event model

// GET endpoint to fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events' });
  }
});

// Include other CRUD operations similar to the GET operation defined above

module.exports = router;
