import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import CollectionTable from './CollectionTable';

const uploadPreset = 'teammembers';

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
    avatarPublicId: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTeamMember(prevState => ({
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
      setNewTeamMember(prevState => ({
        ...prevState,
        avatarUrl: response.data.secure_url,
        avatarPublicId: response.data.public_id,
      }));
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleAddTeamMember = async () => {
    const { name, position, expertise, experience, projects, interests, avatarUrl, avatarPublicId } = newTeamMember;

    const newTeamMemberData = {
      name,
      position,
      expertise,
      experience,
      projects,
      interests,
      avatarUrl,
      avatarPublicId
    };

    try {
      const response = await axios.post('http://localhost:5000/api/teammembers', newTeamMemberData);
      setTeamMembers(prevMembers => [...prevMembers, response.data]);
      setNewTeamMember({
        name: '',
        position: '',
        expertise: '',
        experience: '',
        projects: '',
        interests: '',
        avatarUrl: '',
        avatarPublicId: '',
      });
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Typography variant="h5" gutterBottom>Manage Team Members</Typography>
      <TextField name="name" value={newTeamMember.name} label="Name" onChange={handleChange} fullWidth />
      <TextField name="position" value={newTeamMember.position} label="Position" onChange={handleChange} fullWidth />
      <TextField name="expertise" value={newTeamMember.expertise} label="Expertise" onChange={handleChange} fullWidth />
      <TextField name="experience" value={newTeamMember.experience} label="Experience" onChange={handleChange} fullWidth />
      <TextField name="projects" value={newTeamMember.projects} label="Projects" onChange={handleChange} fullWidth />
      <TextField name="interests" value={newTeamMember.interests} label="Interests" onChange={handleChange} fullWidth />
      <input type="file" onChange={handleImageChange} />
      {newTeamMember.avatarUrl && (
        <img src={newTeamMember.avatarUrl} alt="Avatar" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} />
      )}
      <Button variant="contained" color="primary" onClick={handleAddTeamMember} fullWidth>
        Add Team Member
      </Button>
      <CollectionTable data={teamMembers} schema={teamMemberSchema} />
    </Grid>
  );
};

export default TeamMemberSection;
