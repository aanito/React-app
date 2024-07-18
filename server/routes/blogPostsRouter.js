const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPostModel'); // Import the BlogPost model

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
    const { title, content, author } = req.body; // Extract blog post data from the request body

    const newBlogPost = new BlogPost({ title, content, author }); // Create a new blog post instance

    const savedBlogPost = await newBlogPost.save(); // Save the new blog post to the database

    res.status(201).json(savedBlogPost); // Return the saved blog post as the response
  } catch (error) {
    console.error('Error adding blog post:', error);
    res.status(500).json({ message: 'Error adding blog post' });
  }
});

// PUT endpoint to update an existing blog post
router.put('/:id', async (req, res) => {
  // Update the blog post with the specified ID
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBlogPost); // Return the updated blog post as the response
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ message: 'Error updating blog post' });
  }
});

// DELETE endpoint to delete a blog post
router.delete('/:id', async (req, res) => {
  // Delete the blog post with the specified ID
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
    res.json(deletedBlogPost); // Return the deleted blog post as the response
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ message: 'Error deleting blog post' });
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const BlogPost = require('../models/BlogPostModel'); // Import the BlogPost model

// // GET endpoint to fetch all blog posts
// router.get('/', async (req, res) => {
//   try {
//     const blogPosts = await BlogPost.find();
//     res.json(blogPosts);
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     res.status(500).json({ message: 'Error fetching blog posts' });
//   }
// });

// // Other CRUD operations 
// // POST endpoint to add a new service
// router.post('/', async (req, res) => {
//     try {
//       const { title, description, imageUrl } = req.body; // Extract service data from the request body
  
//       const newService = new Service({ title, description, imageUrl }); // Create a new service instance
  
//       const savedService = await newService.save(); // Save the new service to the database
  
//       res.status(201).json(savedService); // Return the saved service as the response
//     } catch (error) {
//       console.error('Error adding service:', error);
//       res.status(500).json({ message: 'Error adding service' });
//     }
//   });

// module.exports = router;
