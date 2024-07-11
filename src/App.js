import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import NavBar from './NavBar';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Include the NavBar component */}
      <NavBar />

      {/* Include the Sidebar component */}
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Container maxWidth="xl">
          <Typography paragraph>
            {/* Main content of your app */}
            {/* Add your main content here */}
          </Typography>
          <Divider />
          <Typography paragraph>
            {/* Additional content */}
            {/* Add more content here */}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
