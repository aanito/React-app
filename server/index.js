const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Use the mongoose library's built-in promise library to avoid deprecation warnings
mongoose.Promise = global.Promise;

// MongoDB URL
const db_url = 'mongodb://localhost:27017/consult'; // Actual MongoDB URL

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
const Testimonial = require('./models/TestimonialModel');
const Event = require('./models/EventModel');
const Partner = require('./models/PartnerModel');


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import router files
const servicesRouter = require('./routes/servicesRouter');
const blogPostsRouter = require('./routes/blogPostsRouter');
const teamMembersRouter = require('./routes/teamMembersRouter');
const testimonialsRouter = require('./routes/testimonialsRouter');
const eventsRouter = require('./routes/eventsRouter');
const partnersRouter = require('./routes/partnersRouter');

// Use the routers
app.use('/api/services', servicesRouter);
app.use('/api/blogposts', blogPostsRouter);
app.use('/api/teammembers', teamMembersRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/partners', partnersRouter);

// GET endpoint to fetch blog posts from the MongoDB database
// app.get('/api/blogposts', async (req, res) => {
//   try {
//     // Fetch all blog posts from the 'blogposts' collection (assuming the collection name is 'blogposts')
//     const blogPosts = await BlogPost.find();
//     res.json(blogPosts);
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     res.status(500).json({ message: 'Error fetching blog posts' });
//   }
// });

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

app.get('/api/testimonials', async (req, res) => {
  try {
    // Fetch all team members from the 'teamMembers' collection
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ message: 'Error fetching testimonials' });
  }
});

// Defined the endpoint to fetch events data
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find(); // Retrieve all events from the database
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
});


// Defined the endpoint to fetch partner data
app.get('/api/partners', async (req, res) => {
  try {
    const partners = await Partner.find(); // Retrieve all partners from the database
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching partners' });
  }f
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
