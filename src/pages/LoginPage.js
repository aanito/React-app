import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button, Paper, Link, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import health from '../health.png';

const LoginPage = ({ setAuth }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      // setAuth(response.data);

      // Navigate to different pages based on user role
      if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        // navigate('/user');
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };

  return (
    // <Container style={{marginleft: '20px auto', alignContent: 'center', color: '#7c7699'}}> 
    <Container style={{ marginBottom: '40px', alignContent: 'center', color: '#7c7699', backgroundColor: '#3f3e75', padding: '20px', borderRadius: '8px', maxWidth: '600px' }}>
      <Paper style={{ padding: 20, maxWidth: 500, margin: '20px auto' }}>
        <Box textAlign="center">
          <img src={health} alt="E-mpactHealth" style={{ width: 100, marginBottom: 20 }} />
          <Typography variant="h4" gutterBottom>
            Welcome to E-mpactHealth
          </Typography>
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography variant="body2" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}
        <Grid container spacing={2} direction="column">
          <Grid item >
            <TextField name="email" value={loginData.email} label="Email" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item >
            <TextField name="password" value={loginData.password} label="Password" type="password" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <Link href="/register" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
