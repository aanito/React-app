import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ServiceCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services'); // Replace the URL with your backend server endpoint
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {services.map((service) => (
        <Card key={service._id} sx={{ width: 300, m: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={service.imageUrl}
            alt={service.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Request Service
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCard;

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const ServiceCard = ({ service }) => {
//   const { title, description, imageUrl } = service;

//   return (
//     <Card sx={{ width: 300, m: 2 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//         <Button variant="contained" color="primary" fullWidth>
//           Request Service
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ServiceCard;
