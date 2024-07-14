const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPostModel'); // Import the BlogPost model

// Create a new blog post by admin
router.post('/', async (req, res) => {
  try {
    const { title, content, imageUrl, date, isFeatured } = req.body;
    const newBlogPost = new BlogPost({ title, content, imageUrl, date, isFeatured });
    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest featured blog post
router.get('/featured', async (req, res) => {
  try {
    const featuredBlogPost = await BlogPost.findOne({ isFeatured: true }).sort({ updatedAt: -1 }); // Sort by last updated date
    res.status(200).json(featuredBlogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all non-featured blog posts
router.get('/nonFeatured', async (req, res) => {
  try {
    const nonFeaturedBlogPosts = await BlogPost.find({ isFeatured: false }).sort({ date: -1 }); // Sort by creation date
    res.status(200).json(nonFeaturedBlogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blog post to set as featured
router.put('/setFeatured/:id', async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, { isFeatured: true, updatedAt: Date.now() }, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
