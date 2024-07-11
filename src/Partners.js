import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const partnerData = [
  { name: "Partner 1", logoUrl: "partner1_logo.png" },
  { name: "Partner 2", logoUrl: "partner2_logo.png" },
  { name: "Partner 3", logoUrl: "partner3_logo.png" },
  // Add more partner objects as needed
];

const Partners = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Partners
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {partnerData.map((partner, index) => (
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
