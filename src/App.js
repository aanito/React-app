import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, CardMedia, Grid, Slider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';           // Add this import statement
import AssignmentIcon from '@mui/icons-material/Assignment'; // Add this import statement
import EmailIcon from '@mui/icons-material/Email';   

import './App.css'; // Import the external CSS file
import PopoverButtons from './PopoverButtons';

const featuredServices = [
  {
    title: "Service 1",
    description: "Description for Service 1",
    imageUrl: "image-url1.jpg"
  },
  {
    title: "Service 2",
    description: "Description for Service 2",
    imageUrl: "image-url2.jpg"
  },
  {
    title: "Service 3",
    description: "Description for Service 3",
    imageUrl: "image-url3.jpg"
  }
];

const blogPosts = [
  {
    title: "Blog Post 1",
    content: "Content for Blog Post 1",
    imageUrl: "blog-image-url1.jpg"
  },
  {
    title: "Blog Post 2",
    content: "Content for Blog Post 2",
    imageUrl: "blog-image-url2.jpg"
  },
  {
    title: "Blog Post 3",
    content: "Content for Blog Post 3",
    imageUrl: "blog-image-url3.jpg"
  }
];

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Consultancy Services
          </Typography>
          <Button color="inherit" startIcon={<AccountCircleIcon />}>Login</Button>
        </Toolbar>
      </AppBar>

      <div className="slider-container">
        <SliderComponent services={featuredServices} />
      </div>

      <div className="blog-posts-container">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>

      <Drawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Our Services" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>
        </List>
      </Drawer>

      <PopoverButtons />
    </div>
  );
}

function SliderComponent({ services }) {
  return (
    <Slider autoplay={3000} loop={true}>
      {services.map((service, index) => (
        <div key={index} className="slider-item">
          <img src={service.imageUrl} alt={service.title} />
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

function BlogPost({ post }) {
  const { title, content, imageUrl } = post;

  return (
    <div style={{ display: 'flex' }}>
      <Card className="blog-post" sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          height="140"
        />
        <CardContent>
          <Typography variant="h6" component="h3">{title}</Typography>
          <Typography>{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
