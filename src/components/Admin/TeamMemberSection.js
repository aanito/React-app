import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const teamMemberSchema = {
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Position', field: 'position' },
    { label: 'Expertise', field: 'expertise' },
    { label: 'Experience', field: 'experience' },
    { label: 'Projects', field: 'projects' },
    { label: 'Interests', field: 'interests' },
    { label: 'Avatar URL', field: 'avatarUrl' },
  ],
};

const TeamMemberSection = ({ teamMembers, setTeamMembers }) => {
  const [newTeamMember, setNewTeamMember] = useState({
    name: '',
    position: '',
    expertise: '',
    experience: '',
    projects: '',
    interests: '',
    avatarUrl: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTeamMember(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddTeamMember = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/teammembers', newTeamMember);
      setTeamMembers(prevMembers => [...prevMembers, response.data]);
      setNewTeamMember({
        name: '',
        position: '',
        expertise: '',
        experience: '',
        projects: '',
        interests: '',
        avatarUrl: '',
      });
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom>Manage Team Members</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <TextField name="name" value={newTeamMember.name} label="Name" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="position" value={newTeamMember.position} label="Position" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="expertise" value={newTeamMember.expertise} label="Expertise" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="experience" value={newTeamMember.experience} label="Experience" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="projects" value={newTeamMember.projects} label="Projects" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="interests" value={newTeamMember.interests} label="Interests" onChange={handleChange} />
        </Grid>
        <Grid item>
          <TextField name="avatarUrl" value={newTeamMember.avatarUrl} label="Avatar URL" onChange={handleChange} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddTeamMember}>
            Add Team Member
          </Button>
        </Grid>
      </Grid>
      <CollectionTable data={teamMembers} schema={teamMemberSchema} />
    </Grid>
  );
};

export default TeamMemberSection;
