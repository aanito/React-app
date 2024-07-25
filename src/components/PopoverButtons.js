import React, { useState, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import axios from 'axios';

function PopoverButtons() {
  const [eventLink, setEventLink] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const events = response.data;

        const futureEvents = events.filter(event => new Date(event.date) > new Date());
        if (futureEvents.length > 0) {
          futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
          setEventLink(futureEvents[0].registrationLink);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleAppointmentClick = () => {
    window.location.href = 'https://calendly.com/aanito/e-mpacthealth-consultation';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:howmarad@gmail.com';
  };

  const handleEventClick = () => {
    if (eventLink) {
      window.location.href = eventLink;
    } else {
      alert('No upcoming events found.');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, display: 'flex', justifyContent: 'center'}}>
      <Container style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginLeft: '140px' }}>>
        <Button variant="contained" onClick={handleAppointmentClick}>
          Book an appointment
        </Button>
        <Button variant="contained" onClick={handleEventClick}>
          Register for upcoming events
        </Button>
        <Button variant="contained" onClick={handleEmailClick}>
          Email us
        </Button>
      </Container>
    </div>
  );
}

export default PopoverButtons;
