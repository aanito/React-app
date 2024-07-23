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
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  projects: {
    type: String,
    required: true
  },
  interests: {
    type: String
  },
  avatarUrl: {
    type: String
  }
  
});

// Create the Team Member model
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
