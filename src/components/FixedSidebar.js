import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';

const SidebarContainer = styled('div')({
  position: 'fixed',
  top: '100px', // Adjust based on your AppBar height
  width: '240px',
  backgroundColor: 'lightblue',
});

function FixedSidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <SidebarContainer>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Our Services" />
            {/* <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText secondary="Health consultancy" />
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText secondary="Digital health solutions" /> */}
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
                  <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Initiatives" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Publications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Our team" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="our partners" />
          </ListItem>
        </List>
      </Drawer>
    </SidebarContainer>
  );
}

export default FixedSidebar;
