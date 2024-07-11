import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Lead Developer',
    experience: '8+ years',
    expertise: 'Frontend Development, UI/UX Design',
    projects: 'Led multiple successful projects',
    interests: 'Passionate about new web technologies and coding',
  },
  {
    name: 'Jane Smith',
    position: 'Senior Designer',
    experience: '10+ years',
    expertise: 'Graphic Design, Branding',
    projects: 'Created brand identities for top companies',
    interests: 'Enjoys exploring new design trends and art',
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <Avatar alt={member.name} src={`/static/images/avatar/${index + 1}.jpg`} sx={{ width: 100, height: 100 }} />
              <Typography variant="h6" sx={{ mt: 2 }}>{member.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{member.position}</Typography>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                <strong>Experience:</strong> {member.experience}
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
