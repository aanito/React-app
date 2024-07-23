import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'blogposts';

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
    imageFile: null,
    imagePublicId: '',
    imageUrl: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBlogPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
      setNewBlogPost(prevState => ({
        ...prevState,
        imagePublicId: response.data.public_id,
        imageUrl: response.data.secure_url,
      }));
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleAddBlogPost = async () => {
    const { title, content, imagePublicId, imageUrl, date } = newBlogPost;

    const newBlogPostData = {
      title,
      content,
      imagePublicId,
      imageUrl,
      date,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/blogposts', newBlogPostData);
      setBlogPosts(prevBlogPosts => [...prevBlogPosts, response.data]);
      setNewBlogPost({ title: '', content: '', imageFile: null, imagePublicId: '', imageUrl: '', date: new Date().toISOString().split('T')[0] });
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Blog Posts</Typography>
      <TextField name="title" value={newBlogPost.title} label="Title" onChange={handleChange} />
      <TextField name="content" value={newBlogPost.content} label="Content" onChange={handleChange} />
      <input type="file" onChange={handleImageChange} />
      <TextField name="date" value={newBlogPost.date} label="Date" type="date" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleAddBlogPost}>Add Blog Post</Button>
      <CollectionTable data={blogPosts} schema={blogPostSchema} />
    </Grid>
  );
};

export default BlogPostSection;
