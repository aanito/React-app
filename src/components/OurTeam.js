import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';  // Import axios for making HTTP requests

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teammembers');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <Avatar alt={member.name} src={member.avatarUrl} sx={{ width: 100, height: 100 }} />
              <Typography variant="h6" sx={{ mt: 2 }}>{member.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{member.position}</Typography>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                {/* <strong>Experience:</strong> {member.experience} */}
                <br />
                <strong>Expertise:</strong> {member.expertise}
                <br />
                <strong>Projects:</strong> {member.projects}
                <br />
                <strong>Interests:</strong> {member.interests}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurTeam;
