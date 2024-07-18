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

// POST endpoint to add a new team member
router.post('/', async (req, res) => {
  try {
    const { name, position, expertise, experience, projects, interests, avatarUrl } = req.body; // Extract team member data from the request body

    const newTeamMember = new TeamMember({ name, position, expertise, experience, projects, interests, avatarUrl }); // Create a new team member instance

    const savedTeamMember = await newTeamMember.save(); // Save the new team member to the database

    res.status(201).json(savedTeamMember); // Return the saved team member as the response
  } catch (error) {
    console.error('Error adding team member:', error);
    res.status(500).json({ message: 'Error adding team member' });
  }
});

// PUT endpoint to update an existing team member
router.put('/:id', async (req, res) => {
  // Update the team member with the specified ID
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTeamMember); // Return the updated team member as the response
  } catch (error) {
    console.error('Error updating team member:', error);
    res.status(500).json({ message: 'Error updating team member' });
  }
});

// DELETE endpoint to delete a team member
router.delete('/:id', async (req, res) => {
  // Delete the team member with the specified ID
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    res.json(deletedTeamMember); // Return the deleted team member as the response
  } catch (error) {
    console.error('Error deleting team member:', error);
    res.status(500).json({ message: 'Error deleting team member' });
  }
});

module.exports = router;
