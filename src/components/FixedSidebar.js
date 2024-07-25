import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import { Link } from react-router-dom;
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';
import { AnnouncementRounded, EventAvailableOutlined, EventSeatOutlined, GroupOutlined, GroupWorkTwoTone, Launch, NewspaperOutlined } from '@mui/icons-material';

const SidebarContainer = styled('div')({
  position: 'fixed',
  top: '100px', 
  width: '240px',
  backgroundColor: '#e0f7fa',
});

const StyledList = styled(List)({
  paddingTop: '40px', // Space above the items
  paddingBottom: '20px', // Space below the items
});

const StyledFirstListItem = styled(ListItem)({
  marginTop: '50px', // Space above the first item
});


function FixedSidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <SidebarContainer>
      <Drawer 
      anchor="left" 
      open={isDrawerOpen} 
      onClose={toggleDrawer(false)}
      variant="persistent"
  
      style={{ top: '100px' }}  // Ensure the Drawer starts below the appbar
      > 
        <StyledList>
          <StyledFirstListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </StyledFirstListItem>

          <ListItem button>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Our Services" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><AnnouncementRounded/></ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>

          <ListItem component={Link} to="#events" button>
            <ListItemIcon><EventAvailableOutlined /></ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
                  <ListItem button>
            <ListItemIcon><Launch /></ListItemIcon>
            <ListItemText primary="Initiatives" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><NewspaperOutlined/></ListItemIcon>
            <ListItemText primary="Publications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><GroupOutlined /></ListItemIcon>
            <ListItemText primary="Our team" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><GroupWorkTwoTone /></ListItemIcon>
            <ListItemText primary="Our partners" />
          </ListItem>
        </StyledList>
      </Drawer>
    </SidebarContainer>
  );
}

export default FixedSidebar;
