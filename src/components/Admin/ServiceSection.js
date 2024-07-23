import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'services'; // Actual unsigned upload preset

const serviceSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Description', field: 'description' },
    { label: 'Image URL', field: 'imageUrl' }, // Modify schema to include imageURL
  ],
};

const ServiceSection = ({ services, setServices }) => {
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    imageData: null,
    imageUrl: null, // Added imageUrl to state
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewService((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file); // Change 'file' to 'image' to match the backend field name
    formData.append('upload_preset', uploadPreset);

    axios.post('http://localhost:5000/upload', formData)
      .then((response) => {
        setNewService((prevState) => ({
          ...prevState,
          imageData: response.data.imagePublicId, // Update with backend response data field names
          imageUrl: response.data.imageUrl,
        }));
      })
      .catch((error) => {
        console.error('Error uploading image to Cloudinary:', error);
      });
  };

  const handleAddService = async () => {
    try {
      const { title, description, imageData, imageUrl } = newService;

      const newServiceData = {
        title,
        description,
        imagePublicId: imageData,
        imageUrl,
      };

      const response = await axios.post('http://localhost:5000/api/services', newServiceData);

      setServices(prevServices => [...prevServices, response.data]);
      setNewService({ title: '', description: '', imageData: null, imageUrl: null });
      setError('');
    } catch (error) {
      console.error('Error adding service:', error);
      setError('Error adding service. Please try again.');
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Services</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField name="title" value={newService.title} label="Title" onChange={handleChange} />
      <TextField name="description" value={newService.description} label="Description" onChange={handleChange} />
      <input type="file" onChange={handleImageChange} />
      <Button variant="contained" color="primary" onClick={handleAddService}>
        Add Service
      </Button>
      <CollectionTable data={services} schema={serviceSchema} />
    </Grid>
  );
};

export default ServiceSection;
