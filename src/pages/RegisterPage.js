import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button, Paper, Link, Box, Container } from '@mui/material';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

import health from '../health.png';

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    // organizationName: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async () => {
    try {
      const hashedPassword = await bcrypt.hash(registerData.password, 10);
      const newUser = {
        ...registerData,
        password: hashedPassword
      };
      const response = await axios.post('http://localhost:5000/api/auth/register', newUser);
      console.log('User registered:', response.data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user');
    }
  };

  return (
    
    <Container style={{ margin: '20px auto', alignContent: 'center', color: '#7c7699', backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '8px', maxWidth: '500px' }}>
    <Box textAlign="center">
        <img src={health} alt="E-mpactHealth" style={{ width: 100, marginBottom: 20 }} />
        <Typography variant="h4" gutterBottom>
        E-mpactHealth 
        </Typography>
    </Box>
    <Typography variant="h5" align="center" gutterBottom>
        Register below
    </Typography>
    {error && (
        <Typography variant="body2" color="error" align="center" gutterBottom>
        {error}
        </Typography>
    )}
    <Grid container spacing={2} direction="column">
        <Grid item>
        <TextField name="name" value={registerData.name} label="Name" onChange={handleChange} fullWidth />
        </Grid>
        <Grid item>
        <TextField name="email" value={registerData.email} label="Email" onChange={handleChange} fullWidth />
        </Grid>
        <Grid item>
        <TextField name="password" value={registerData.password} label="Password" type="password" onChange={handleChange} fullWidth />
        </Grid>
        {/* <Grid item>
        <TextField name="organizationName" value={registerData.organizationName} label="Organization Name" onChange={handleChange} fullWidth />
        </Grid> */}
        <Grid item>
        <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
            Register
        </Button>
        </Grid>
        <Grid item>
        <Typography variant="body2" align="center">
            Already have an account?{' '}
            <Link href="/login" underline="hover">
            Login
            </Link>
        </Typography>
        </Grid>
    </Grid>
    </Container>
    
  );
};

export default RegisterPage;


