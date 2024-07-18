// teamMembersRouter.js
const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamModel'); // Import the TeamMember model

// GET endpoint to fetch all team members
router.get('/', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ message: 'Error fetching team members' });
  }
});

// Include other CRUD operations similar to the GET operation defined above

module.exports = router;
