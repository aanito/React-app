 import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import health from  "../health.png";

const AppBarComponent = ({ toggleDrawer }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#050a66', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
          {/* <Button color="inherit" startIcon={<AccountCircleIcon />}> 
              <Link to="/login">Login</Link>
      
          </Button> */}
          <Link to="/login" style={{textDecoration: 'none', color: '#fcf7f7'}}>
              <Button color="inherit" startIcon={<AccountCircleIcon /> }>Login</Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none', color: '#fcf7f7' }}>
            <Button color="inherit">Register</Button>
          </Link>

        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
