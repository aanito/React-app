const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Should be hashed for security
  // Other details 
});

const User = mongoose.model('User', userSchema);
module.exports = User;
