import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios'; // For making HTTP requests

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/partners'); // Assuming '/api/partners' fetches partners data
        setPartners(response.data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  if (partners.length === 0) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Partners
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {partners.map((partner, index) => (
          <Grid item key={index}>
            <img src={partner.logoUrl} alt={partner.name} style={{ width: 150, height: 100 }} />
            <Typography variant="body2" align="center" style={{ marginTop: 8 }}>
              {partner.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
