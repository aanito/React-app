import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios'; // Import axios for HTTP requests

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/testimonials'); // defined API endpoint to fetch testimonials data
        setTestimonials(response.data);
      } catch (error) {
        console.log('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array to only run the effect once

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />
              <Typography variant="h6" sx={{ ml: 2 }}>{testimonial.name}</Typography>
            </Box>
            <Typography variant="body1">{testimonial.feedback}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;

// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

// const testimonialData = [
//   { name: 'John Doe', feedback: 'Excellent service! I am truly satisfied with the product.' },
//   { name: 'Jane Smith', feedback: 'Great customer service and fast delivery. Highly recommended.' },
//   { name: 'Alice Johnson', feedback: 'Outstanding quality and competitive prices. Will shop again.' },
// ];

// const Testimonials = () => {
//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Customer Testimonials
//       </Typography>
//       <Grid container spacing={3}>
//         {testimonialData.map((testimonial, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//               <Avatar alt={testimonial.name} src={`/static/images/avatar/${index + 1}.jpg`} />
//               <Typography variant="h6" sx={{ ml: 2 }}>{testimonial.name}</Typography>
//             </Box>
//             <Typography variant="body1">{testimonial.feedback}</Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Testimonials;
