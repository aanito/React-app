import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'services'; // Actual unsigned upload preset
// const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

const serviceSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Description', field: 'description' },
    { label: 'Image URL', field: 'imageUrl' },
  ],
};

const ServiceSection = ({ services, setServices }) => {
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    imageData: null,
    imageUrl: null,
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
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    axios.post('https://api.cloudinary.com/v1_1/dqtbigvwt/image/upload', formData)
      .then((response) => {
        setNewService((prevState) => ({
          ...prevState,
          imageData: response.data.public_id,
          imageUrl: response.data.secure_url,
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
        imageUrl: imageUrl
      };

      const response = await axios.post('http://localhost:5000/api/services', newServiceData);

      setServices((prevServices) => [...prevServices, response.data]);
      setNewService({ title: '', description: '', imageData: null, imageUrl: null });
      setError('');
    } catch (error) {
      console.error('Error adding service:', error);
      setError('Error adding service. Please try again.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>Manage Services</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField name="title" value={newService.title} label="Title" onChange={handleChange} />
        <TextField name="description" value={newService.description} label="Description" onChange={handleChange} />
        <input type="file" onChange={handleImageChange} />
        {newService.imageUrl && <img src={newService.imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
        <Button variant="contained" color="primary" onClick={handleAddService}>
          Add Service
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CollectionTable data={services} schema={serviceSchema} />
      </Grid>
    </Grid>
  );
};

export default ServiceSection;
