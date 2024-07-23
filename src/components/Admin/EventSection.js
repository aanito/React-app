import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'events';

const eventSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Date', field: 'date' },
    { label: 'Image URL', field: 'imageUrl' },
    { label: 'Description', field: 'description' },
    { label: 'Registration Link', field: 'registrationLink' },
  ],
};

const EventSection = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    imagePublicId: '',
    imageUrl: '',
    description: '',
    registrationLink: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewEvent(prevState => ({
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
      setNewEvent(prevState => ({
        ...prevState,
        imageUrl: response.data.secure_url,
        imagePublicId: response.data.public_id,
      }));
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleAddEvent = async () => {
    const { title, date, imagePublicId, imageUrl, description, registrationLink } = newEvent;

    const newEventData = {
      title,
      date,
      imagePublicId,
      imageUrl,
      description,
      registrationLink
    };

    try {
      const response = await axios.post('http://localhost:5000/api/events', newEventData);
      setEvents(prevEvents => [...prevEvents, response.data]);
      setNewEvent({
        title: '',
        date: new Date().toISOString().split('T')[0],
        imagePublicId: '',
        imageUrl: '',
        description: '',
        registrationLink: '',
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Typography variant="h5" gutterBottom>Manage Events</Typography>
      <TextField name="title" value={newEvent.title} label="Title" onChange={handleChange} fullWidth />
      <TextField name="date" value={newEvent.date} label="Date" type="date" onChange={handleChange} fullWidth />
      <input type="file" onChange={handleImageChange} />
      {newEvent.imageUrl && (
        <img src={newEvent.imageUrl} alt="Event" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} />
      )}
      <TextField name="description" value={newEvent.description} label="Description" onChange={handleChange} fullWidth />
      <TextField name="registrationLink" value={newEvent.registrationLink} label="Registration Link" onChange={handleChange} fullWidth />
      <Button variant="contained" color="primary" onClick={handleAddEvent} fullWidth>
        Add Event
      </Button>
      <CollectionTable data={events} schema={eventSchema} />
    </Grid>
  );
};

export default EventSection;
