import React, { useEffect, useState } from 'react';
import { Typography, Container, Divider, } from '@mui/material';

import './App.css'; // Import the external CSS file
import AppBarComponent from './components/AppBar';
import PopoverButtons from './components/PopoverButtons';
import FixedSidebar from './components/FixedSidebar';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import serviceService from './Services/Services.service';
import ServiceCard from './components/ServiceCard';

import Partners from './components/Partners';
import Events from './components/Events';

import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import UnauthorizedAccess from './pages/UnauthorizedAccess';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


// const servicesData = [
//   {
//     title: 'Digital Health Infrastructure',
//     description: 'Create stunning and responsive websites.',
//     imageUrl: 'web_design_image_url.jpg',
//   },
//   {
//     title: 'Quality Improvement',
//     description: 'Boost your online presence and reach more customers.',
//     imageUrl: 'digital_marketing_image_url.jpg',
//   },
//   {
//     title: 'Medical consultancy',
//     description: 'Beautiful and effective graphic design solutions.',
//     imageUrl: 'graphic_design_image_url.jpg',
//   },
  // Add more service objects as needed
// ];

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const userRole = 'admin'; // Get the user's role from authentication

  const [services, setServices] = useState([]);
  // const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    serviceService.getAllServices().then(response => {
      setServices(response.data);
    });

    // teamMemberService.getAllTeamMembers().then(response => {
    //   setTeamMembers(response.data);
    // });
  }, []);

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column' }}>
      
      <AppBarComponent toggleDrawer={toggleDrawer} />

      <div>
        <FixedSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>

      <div>
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Services
          </Typography>
          <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {services.map((service, index) => (
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
        <Container sx={{ py: 4 }}>
          {/* Your existing content */}
          <Events /> {/* Render the Events component */}
        </Container>
      </div>

      <div>
        <Container>
          {/* BlogPost component rendering logic */}
          
          <Divider />
          
          {/* Rendering the Partners component */}
          <Partners />
        </Container>
      </div>

      <div>
        <PopoverButtons />
      </div>

      <div>
        <Footer />
      </div>

      {/* <Router>
        <Routes> */}
          {/* Other routes */}
          {/* <Route path="/services" element={<Services />} />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminDashboard />} userRole="admin" />}
          />
          <Route path="/unauthorized" element={<UnauthorizedAccess />} /> */}
          {/* Your other routes */}
        {/* </Routes>
      </Router> */}



    </div>

  );
}

export default App;
