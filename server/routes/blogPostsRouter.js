const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost'); // Import the BlogPost model

// GET endpoint to fetch all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ message: 'Error fetching blog posts' });
  }
});

// Other CRUD operations 

module.exports = router;
