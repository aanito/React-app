const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPostModel');
const multer = require('multer');
const cloudinary = require('../cloudinary/cloudinary');
const upload = multer();

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

// POST endpoint to add a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content, imagePublicId, imageUrl, date } = req.body;

    const newBlogPost = new BlogPost({
      title,
      content,
      imagePublicId,
      imageUrl,
      date
    });

    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    console.error('Error adding blog post:', error);
    res.status(500).json({ message: 'Error adding blog post' });
  }
});

module.exports = router;
