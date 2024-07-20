 import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import health from  "../health.png";

const AppBarComponent = ({ toggleDrawer }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1976D2', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img src={health} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6" component="div">
            E-mpactHealth Consultancy
          </Typography>
        </div>
        <div>
          <Button color="inherit" startIcon={<AccountCircleIcon />}>Login</Button>
          <Button color="inherit">Register</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
