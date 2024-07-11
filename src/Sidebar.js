import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';

const drawerWidth = 240;

// Styling for the sidebar
const SidebarContainer = styled('div')({
  position: 'fixed',
  width: `${drawerWidth}px`,
  top: '250px',
  flexShrink: 0,
  zIndex: 0, // Set to lower value than the main content
});


const Sidebar = () => {
  return (
    <SidebarContainer>
      <Drawer
        variant="permanent"
        anchor="left"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Our Services" />
            {/* Add more list items as needed */}
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>
          {/* Add more list items as needed */}
        </List>
      </Drawer>
    </SidebarContainer>
  );
}

export default Sidebar;
