const express = require('express');
const router = express.Router();
const TeamMember = require('../models/Team'); // Import the TeamMember model

// Create a new team member
router.post('/', async (req, res) => {
  try {
    const { name, position, expertise, projects, interests } = req.body;
    const newTeamMember = new TeamMember({ name, position, expertise, projects, interests });
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all team members
router.get('/', async (req, res) => {
  try {
    const allTeamMembers = await TeamMember.find();
    res.status(200).json(allTeamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
