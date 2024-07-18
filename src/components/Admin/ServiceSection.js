import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

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
    imageUrl: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/services', newService);
      setServices(prevServices => [...prevServices, response.data]);
      setNewService({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Services</Typography>
      <TextField name="title" value={newService.title} label="Title" onChange={handleChange} />
      <TextField name="description" value={newService.description} label="Description" onChange={handleChange} />
      <TextField name="imageUrl" value={newService.imageUrl} label="Image URL" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleAddService}>Add Service</Button>
      <CollectionTable data={services} schema={serviceSchema} />
    </Grid>
  );
};

export default ServiceSection;
