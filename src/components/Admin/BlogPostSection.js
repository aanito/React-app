import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const blogPostSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Content', field: 'content' },
    { label: 'Image URL', field: 'imageUrl' },
    { label: 'Date', field: 'date' },
  ],
};

const BlogPostSection = ({ blogPosts, setBlogPosts }) => {
  const [newBlogPost, setNewBlogPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    date: new Date().toISOString().split('T')[0], // Initialize with today's date
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBlogPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddBlogPost = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/blogposts', newBlogPost);
      setBlogPosts(prevBlogPosts => [...prevBlogPosts, response.data]);
      setNewBlogPost({ title: '', content: '', imageUrl: '', date: new Date().toISOString().split('T')[0] });
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Blog Posts</Typography>
      <TextField name="title" value={newBlogPost.title} label="Title" onChange={handleChange} />
      <TextField name="content" value={newBlogPost.content} label="Content" onChange={handleChange} />
      <TextField name="imageUrl" value={newBlogPost.imageUrl} label="Image URL" onChange={handleChange} />
      <TextField name="date" value={newBlogPost.date} label="Date" type="date" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleAddBlogPost}>Add Blog Post</Button>
      <CollectionTable data={blogPosts} schema={blogPostSchema} />
    </Grid>
  );
};

export default BlogPostSection;
