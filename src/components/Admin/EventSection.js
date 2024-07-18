import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const eventSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Date', field: 'date' },
    { label: 'Image', field: 'image' },
    { label: 'Description', field: 'description' },
    { label: 'Registration Link', field: 'registrationLink' },
  ],
};

const EventSection = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
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

  const handleAddEvent = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/events', newEvent);
      setEvents(prevEvents => [...prevEvents, response.data]);
      setNewEvent({
        title: '',
        date: new Date().toISOString().split('T')[0],
        image: '',
        description: '',
        registrationLink: '',
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Events</Typography>
      <TextField name="title" value={newEvent.title} label="Title" onChange={handleChange} />
      <TextField name="date" value={newEvent.date} label="Date" type="date" onChange={handleChange} />
      <TextField name="image" value={newEvent.image} label="Image URL" onChange={handleChange} />
      <TextField name="description" value={newEvent.description} label="Description" onChange={handleChange} />
      <TextField name="registrationLink" value={newEvent.registrationLink} label="Registration Link" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleAddEvent}>Add Event</Button>
      <CollectionTable data={events} schema={eventSchema} />
    </Grid>
  );
};

export default EventSection;
