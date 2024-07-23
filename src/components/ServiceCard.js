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
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  // Function to construct the Cloudinary URL for the image
  const getImageUrl = (imagePublicId) => {
    return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${imagePublicId}`;
  };
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {services.map((service) => (
        <Card key={service._id} sx={{ width: 300, m: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={getImageUrl(service.imagePublicId)} // Use Cloudinary URL for image display
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const ServiceCard = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/services');
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Function to construct the Cloudinary URL for the image
//   const getImageUrl = (imagePublicId) => {
//     return `https://res.cloudinary.com/process.env.CLOUDINARY_NAME/image/upload/${imagePublicId}`;
//   };
  
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {services.map((service) => (
//         <Card key={service._id} sx={{ width: 300, m: 2 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image={getImageUrl(service.imagePublicId)} // Use Cloudinary URL for image display
//             alt={service.title}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               {service.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {service.description}
//             </Typography>
//             <Button variant="contained" color="primary" fullWidth>
//               Request Service
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default ServiceCard;

