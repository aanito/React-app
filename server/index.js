const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Use the mongoose library's built-in promise library to avoid deprecation warnings
mongoose.Promise = global.Promise;

// MongoDB URL
const db_url = 'mongodb://localhost:27017/consult'; // Replace with your actual MongoDB URL

// Connect to MongoDB
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.error('Could not connect to the database. Exiting now...', err);
  process.exit(1); // Exit the process with a non-zero status code to indicate an error
});

// Load the Service model
const Service = require('./models/ServiceModel'); 
const BlogPost = require('./models/BlogPostModel');
const TeamMember = require('./models/TeamModel');
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET endpoint to fetch services from the MongoDB database
app.get('/api/services', async (req, res) => {
  try {
    // Fetch all services from the 'services' collection
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// GET endpoint to fetch blog posts from the MongoDB database
app.get('/api/blogposts', async (req, res) => {
  try {
    // Fetch all blog posts from the 'blogposts' collection (assuming the collection name is 'blogposts')
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ message: 'Error fetching blog posts' });
  }
});

app.get('/api/teammembers', async (req, res) => {
  try {
    // Fetch all team members from the 'teamMembers' collection
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ message: 'Error fetching team members' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
