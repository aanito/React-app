import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './App.css'; // Import the external CSS file
import PopoverButtons from './PopoverButtons';
import FixedSidebar from './FixedSidebar';
import Testimonials from './Testimonials';
import OurTeam from './OurTeam';
import Footer from './Footer';
import BlogPost from './BlogPost';
import ServiceCard from './ServiceCard';


const postsData = [
  {
    title: 'Featured Post Title',
    content: 'Content of the featured post goes here. This is the main article that stands out.',
    imageUrl: 'url_to_featured_image.jpg',
    date: '2022-09-26',
    isFeatured: true, // Marking this post as featured
  },
  {
    title: 'Regular Post 1 Title',
    content: 'Content of regular post 1 goes here. It supports the featured post.',
    imageUrl: 'url_to_regular_image_1.jpg',
    date: '2022-09-25',
    isFeatured: false,
  },
  {
    title: 'Regular Post 2 Title',
    content: 'Content of regular post 2 goes here. Another supporting post for the featured article.',
    imageUrl: 'url_to_regular_image_2.jpg',
    date: '2022-09-24',
    isFeatured: false,
  },
];

const servicesData = [
  {
    title: 'Digital Health Infrastructure',
    description: 'Create stunning and responsive websites.',
    imageUrl: 'web_design_image_url.jpg',
  },
  {
    title: 'Quality Improvement',
    description: 'Boost your online presence and reach more customers.',
    imageUrl: 'digital_marketing_image_url.jpg',
  },
  {
    title: 'Medical consultancy',
    description: 'Beautiful and effective graphic design solutions.',
    imageUrl: 'graphic_design_image_url.jpg',
  },
  // Add more service objects as needed
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
      <FixedSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <div>
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Services
          </Typography>
          <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </Container>
        </Container>
      </div>
  

      <div>
        <Container>
          {postsData.map((post, index) => (
            <React.Fragment key={index}>
              {post.isFeatured && (
                <BlogPost post={post} isFeatured />
              )}
            </React.Fragment>
          ))}
          
          <Divider />
          
          <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {postsData.map((post, index) => (
              <React.Fragment key={index}>
                {!post.isFeatured && (
                  <BlogPost post={post} isFeatured={false} />
                )}
              </React.Fragment>
            ))}
          </Container>
        </Container>
      </div>

      <div>
        <OurTeam />
      </div>

      <div>
        <Testimonials />
      </div>
      <div>
        <PopoverButtons />
      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
}

export default App;
