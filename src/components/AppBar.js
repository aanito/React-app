import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import health from  "../health.png";


const AppBarComponent = ({ toggleDrawer }) => {
  return (
    <AppBar position="static">
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
          <Button color="inherit" variant="h5" className="title">
            E-mpactHealth Consultancy
          </Button>
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
