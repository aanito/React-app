import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ServiceCard = ({ service }) => {
  const { title, description, imageUrl } = service;

  return (
    <Card sx={{ width: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Request Service
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
