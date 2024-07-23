const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamModel');

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

// POST endpoint to add a new team member
router.post('/', async (req, res) => {
  try {
    const { name, position, expertise, experience, projects, interests, avatarUrl, avatarPublicId } = req.body;

    const newTeamMember = new TeamMember({
      name,
      position,
      expertise,
      experience,
      projects,
      interests,
      avatarUrl,
      avatarPublicId
    });

    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    console.error('Error adding team member:', error);
    res.status(500).json({ message: 'Error adding team member' });
  }
});

module.exports = router;
