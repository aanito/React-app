import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button, Input } from '@mui/material';
import CollectionTable from './CollectionTable';

const serviceSchema = {
  columns: [
    { label: 'Title', field: 'title' },
    { label: 'Description', field: 'description' },
    { label: 'Image URL', field: 'imageUrl' },
  ],
};

const ServiceSection = ({ services, setServices }) => {
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    imageData: null // Store base64 image data
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewService(prevState => ({
          ...prevState,
          imageData: reader.result // Store base64 image data
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddService = async () => {
    try {
      const { title, description, imageData } = newService;
      const response = await axios.post('http://localhost:5000/api/services', {
        title,
        description,
        imageData,
      });

      const newServiceData = response.data;
      
      setServices(prevServices => [...prevServices, newServiceData]);
      setNewService({ title: '', description: '', imageData: null });

    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Services</Typography>
      <TextField name="title" value={newService.title} label="Title" onChange={handleChange} />
      <TextField name="description" value={newService.description} label="Description" onChange={handleChange} />
      <Input type="file" onChange={handleImageChange} />
      <Button variant="contained" color="primary" onClick={handleAddService}>Add Service</Button>
      <CollectionTable data={services} schema={serviceSchema} />
    </Grid>
  );
};

export default ServiceSection;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Typography, Grid, TextField, Button, Input } from '@mui/material';
// import CollectionTable from './CollectionTable';

// const serviceSchema = {
//   columns: [
//     { label: 'Title', field: 'title' },
//     { label: 'Description', field: 'description' },
//     { label: 'Image URL', field: 'imageUrl' },
//   ],
// };

// const ServiceSection = ({ services, setServices }) => {
//   const [newService, setNewService] = useState({
//     title: '',
//     description: '',
//     image: null
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewService(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (event) => {
//     setNewService(prevState => ({
//       ...prevState,
//       image: event.target.files[0]
//     }));
//   };

//   const handleAddService = async () => {
//     try {
//       let formData = new FormData();
//       formData.append('title', newService.title);
//       formData.append('description', newService.description);
//       formData.append('image', newService.image);

//       const response = await axios.post('http://localhost:5000/api/services', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Response data contains the details of the newly added service
//       const newServiceData = response.data;

//       setServices(prevServices => [...prevServices, newServiceData]);
//       setNewService({ title: '', description: '', image: null });

//     } catch (error) {
//       console.error('Error adding service:', error);
//     }
//   };

//   return (
//     <Grid item xs={12}>
//       <Typography variant="h5" gutterBottom>Manage Services</Typography>
//       <TextField name="title" value={newService.title} label="Title" onChange={handleChange} />
//       <TextField name="description" value={newService.description} label="Description" onChange={handleChange} />
//       <Input type="file" onChange={handleImageChange} />
//       <Button variant="contained" color="primary" onClick={handleAddService}>Add Service</Button>
//       <CollectionTable data={services} schema={serviceSchema} />
//     </Grid>
//   );
// };

// export default ServiceSection;
