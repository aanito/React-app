const express = require('express');
const router = express.Router();
const Event = require('../models/EventModel');

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

// POST endpoint to add a new event
router.post('/', async (req, res) => {
  try {
    const { title, date, imagePublicId, imageUrl, description, registrationLink } = req.body;

    const newEvent = new Event({
      title,
      date,
      imagePublicId,
      imageUrl,
      description,
      registrationLink
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event' });
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Event = require('../models/EventModel'); // Import the Event model

// // GET endpoint to fetch all events
// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     res.status(500).json({ message: 'Error fetching events' });
//   }
// });

// //POST endpoint
// router.post('/', async  (req, res) => {
//     try {
//         const { title, date, image, description, registrationLink} = req.body; // Extract service data from the request body
    
//         const newEvent = new Event({ title, date, image, description, registrationLink}); // Create a new service instance
    
//         const savedEvent = await newEvent.save(); // Save the new service to the database
    
//         res.status(201).json(savedEvent); // Return the saved service as the response
//       } catch (error) {
//         console.error('Error adding service:', error);
//         res.status(500).json({ message: 'Error adding service' });
//       }
//     });

// // Include other CRUD operations similar to the GET operation defined above

// module.exports = router;
