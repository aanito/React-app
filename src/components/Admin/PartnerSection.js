import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const partnerSchema = {
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Logo URL', field: 'logoUrl' },
  ],
};

const PartnerSection = ({ partners, setPartners }) => {
  const [newPartner, setNewPartner] = useState({
    name: '',
    logoUrl: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPartner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddPartner = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/partners', newPartner);
      setPartners(prevPartners => [...prevPartners, response.data]);
      setNewPartner({
        name: '',
        logoUrl: '',
      });
    } catch (error) {
      console.error('Error adding partner:', error);
    }
  };

  useEffect(() => {
    // Fetch partners data on component mount
    axios.get('http://localhost:5000/api/partners')
      .then(response => setPartners(response.data))
      .catch(error => console.error('Error fetching partners:', error));
  }, [setPartners]);

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Partners</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <TextField name="name" value={newPartner.name} label="Name" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="logoUrl" value={newPartner.logoUrl} label="Logo URL" onChange={handleChange} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddPartner}>
            Add Partner
          </Button>
        </Grid>
      </Grid>
      <CollectionTable data={partners} schema={partnerSchema} />
    </Grid>
  );
};

export default PartnerSection;
