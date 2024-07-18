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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
