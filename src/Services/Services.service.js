import axios from 'axios';

const API_URL = 'http://localhost:5000/api/services';

const getAllServices = () => {
  return axios.get(API_URL);
};

const serviceService = {
  getAllServices
};

export default serviceService;

// import React, { useEffect, useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import ServiceCard from '../components/ServiceCard';
// import axios from 'axios';

// const Services = () => {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     const fetchServicesData = async () => {
//       try {
//         const response = await axios.get('mongodb://localhost:27017/services'); // Update the URL with your backend API endpoint
//         setServicesData(response.data);
//       } catch (error) {
//         console.error('Error fetching services data:', error);
//       }
//     };

//     fetchServicesData();
//   }, []);

//   return (
//     <div>
//       <Container>
//         <Typography variant="h5" gutterBottom>
//           Our Services
//         </Typography>
//         <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
//           {servicesData.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </Container>
//       </Container>
//     </div>
//   );
// };

// export default Services;
