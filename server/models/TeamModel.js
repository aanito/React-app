// Team.js - Team member schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Team Member Schema
const teamMemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false
  },
  expertise: {
    type: String,
    required: true
  },
  projects: {
    type: String,
    required: false
  },
  interests: {
    type: String,
    required: false
  }
});

// Create the Team Member model
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
