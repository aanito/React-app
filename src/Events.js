import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const eventsData = [
  {
    title: 'Upcoming Event 1',
    date: 'August 15, 2024',
    image: 'event1_image.jpg',
    description: 'Description of the upcoming event 1...',
    registrationLink: 'registration_link_for_event1',
  },
  {
    title: 'Upcoming Event 2',
    date: 'September 10, 2024',
    image: 'event2_image.jpg',
    description: 'Description of the upcoming event 2...',
    registrationLink: 'registration_link_for_event2',
  },
  // Add details for additional events as needed
];

const Events = () => {
  const upcomingEvent = eventsData.reduce((earliest, event) =>
    new Date(event.date) < new Date(earliest.date) ? event : earliest
  );

  const otherEvents = eventsData.filter(event => event !== upcomingEvent);

  return (
    <div>
      {/* Display details of the upcoming event */}
      <Card sx={{ maxWidth: 600, margin: 'auto' }}>
        <CardMedia
          component="img"
          height="200"
          image={upcomingEvent.image}
          alt={upcomingEvent.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {upcomingEvent.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Date: {upcomingEvent.date}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {upcomingEvent.description}
          </Typography>
          <Button variant="contained" component="a" href={upcomingEvent.registrationLink}>
            Register Now
          </Button>
        </CardContent>
      </Card>

      {/* Display details of other events horizontally */}
      <Grid container spacing={2} justifyContent="center">
        {otherEvents.map(event => (
          <Grid item key={event.title}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Date: {event.date}
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
