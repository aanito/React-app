import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';

// import CollectionTable from './CollectionTable';
import ServiceSection from './ServiceSection';
import BlogPostSection from './BlogPostSection';
import EventSection from './EventSection';
import TeamMemberSection from './TeamMemberSection';
import PartnerSection from './PartnerSection';

const AdminPanel = () => {
  const [services, setServices] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const servicesResponse = await axios.get('http://localhost:5000/api/services');
      setServices(servicesResponse.data);
  
      const blogPostsResponse = await axios.get('http://localhost:5000/api/blogposts');
      setBlogPosts(blogPostsResponse.data);
  
      const eventsResponse = await axios.get('http://localhost:5000/api/events');
      setEvents(eventsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>

      <ServiceSection services={services} setServices={setServices} />
      <BlogPostSection blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
      <EventSection events={events} setEvents={setEvents} />
      <TeamMemberSection teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <PartnerSection partners={partners} setPartners={setPartners} />
    </Container>
  );
};

export default AdminPanel;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Divider, Grid, Button, TextField } from '@mui/material';

// import CollectionTable from './CollectionTable';


// const serviceSchema = {
//     columns: [
//       { label: 'Title', field: 'title' },
//       { label: 'Description', field: 'description' },
//       { label: 'Image URL', field: 'imageUrl' },
//     ],
//   };
  

// const AdminPanel = () => {
//   const [services, setServices] = useState([]);
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const servicesResponse = await axios.get('http://localhost:5000/api/services');
//         setServices(servicesResponse.data);

//         const blogPostsResponse = await axios.get('http://localhost:5000/api/blogposts');
//         setBlogPosts(blogPostsResponse.data);

//         const eventsResponse = await axios.get('http://localhost:5000/api/events');
//         setEvents(eventsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [newService, setNewService] = useState({
//     title: '',
//     description: '',
//     imageUrl: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewService(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleAddService = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/services', newService);
//       // Assuming the API returns the newly added service as the response
//       setServices(prevServices => [...prevServices, response.data]); // Update the local state with the new service
//       setNewService({  // Clear the form after adding the service
//         title: '',
//         description: '',
//         imageUrl: ''
//       });
//     } catch (error) {
//       console.error('Error adding service:', error);
//     }
//   };


//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>Admin Panel</Typography>

//       <TextField
//         name="title"
//         value={newService.title}
//         label="Title"
//         onChange={handleChange}
//       />
//       <TextField
//         name="description"
//         value={newService.description}
//         label="Description"
//         onChange={handleChange}
//       />
//       <TextField
//         name="imageUrl"
//         value={newService.imageUrl}
//         label="Image URL"
//         onChange={handleChange}
//       />
//       <Button variant="contained" color="primary" onClick={handleAddService}>Add Service</Button>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h5" gutterBottom>Manage Services</Typography>
//           <CollectionTable data={services} schema={serviceSchema} onAdd={handleAddService} />
//         </Grid>
       
//       </Grid>
//     </Container>
//   );
// };

// export default AdminPanel;
