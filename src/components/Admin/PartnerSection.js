import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'partners';

const partnerSchema = {
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Logo URL', field: 'logoUrl' },
  ],
};

const PartnerSection = ({ partners, setPartners }) => {
  const [newPartner, setNewPartner] = useState({
    name: '',
    logoPublicId: '',
    logoUrl: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPartner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
      setNewPartner(prevState => ({
        ...prevState,
        logoUrl: response.data.secure_url,
        logoPublicId: response.data.public_id,
      }));
    } catch (error) {
      console.error('Error uploading logo to Cloudinary:', error);
    }
  };

  const handleAddPartner = async () => {
    const { name, logoPublicId, logoUrl } = newPartner;

    const newPartnerData = {
      name,
      logoPublicId,
      logoUrl
    };

    try {
      const response = await axios.post('http://localhost:5000/api/partners', newPartnerData);
      setPartners(prevPartners => [...prevPartners, response.data]);
      setNewPartner({
        name: '',
        logoPublicId: '',
        logoUrl: '',
      });
    } catch (error) {
      console.error('Error adding partner:', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/partners')
      .then(response => setPartners(response.data))
      .catch(error => console.error('Error fetching partners:', error));
  }, [setPartners]);

  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Typography variant="h5" gutterBottom>Manage Partners</Typography>
      <TextField name="name" value={newPartner.name} label="Name" onChange={handleChange} fullWidth />
      <input type="file" onChange={handleImageChange} />
      {newPartner.logoUrl && (
        <img src={newPartner.logoUrl} alt="Logo" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} />
      )}
      <Button variant="contained" color="primary" onClick={handleAddPartner} fullWidth>
        Add Partner
      </Button>
      <CollectionTable data={partners} schema={partnerSchema} />
    </Grid>
  );
};

export default PartnerSection;
