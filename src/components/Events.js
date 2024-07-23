import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  const upcomingEvent = events.reduce((earliest, event) => (
    new Date(event.date) < new Date(earliest.date) ? event : earliest
  ));

  const otherEvents = events.filter(event => event !== upcomingEvent);

  return (
    <div>
      {/* Display details of the upcoming event */}
      <Card sx={{ maxWidth: 600, margin: 'auto' }}>
        <CardMedia
          component="img"
          height="200"
          image={upcomingEvent.imageUrl}
          alt={upcomingEvent.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {upcomingEvent.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Date: {new Date(upcomingEvent.date).toDateString()}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {upcomingEvent.description}
          </Typography>
          <Button variant="contained" component="a" href={upcomingEvent.registrationLink}>
            Register Now
          </Button>
        </CardContent>
      </Card>

      {/* Display details of other events */}
      <Grid container spacing={2} justifyContent="center">
        {otherEvents.map(event => (
          <Grid item key={event._id}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="140"
                image={event.imageUrl}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Date: {new Date(event.date).toDateString()}
                </Typography>
                <Button variant="outlined" component="a" href={event.registrationLink}>
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Events;
