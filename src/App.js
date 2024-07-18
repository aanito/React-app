import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Divider, } from '@mui/material';

import './App.css'; // Import the external CSS file
import AppBarComponent from './components/AppBar';
import PopoverButtons from './components/PopoverButtons';
import FixedSidebar from './components/FixedSidebar';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import ServiceCard from './components/ServiceCard';

import Partners from './components/Partners';
import Events from './components/Events';
import { blueGrey } from '@mui/material/colors';
import { CenterFocusStrong } from '@mui/icons-material';
import AdminPanel from './components/Admin/AdminPanel';


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
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch services from the backend MongoDB server
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services'); // Replace the URL with your backend server endpoint
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogposts');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchServices();
    fetchBlogPosts();

  }, []); // Empty dependency array to run the effect only once

   // Sort the blogPosts array based on the date property in descending order
   const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column' }}>
      
      <AppBarComponent toggleDrawer={toggleDrawer} />

      <div>
        <FixedSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>

      <div>
        <Container>
          <Typography variant="h5" align='center' gutterBottom>
            Our Services
          </Typography>
          <ServiceCard />
        </Container>

      </div>
  

      <div>
        <Container>
          {sortedBlogPosts.map((post, index) => (
            <React.Fragment key={index}>
              {post.isFeatured && <BlogPost key={index} post={post} isFeatured />}
            </React.Fragment>
          ))}

          <Divider />

          <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedBlogPosts.map((post, index) => (
              <React.Fragment key={index}>
                {!post.isFeatured && (
                  <BlogPost key={index} post={post} isFeatured={false} />
                )}
              </React.Fragment>
            ))}
          </Container>
        </Container>
      </div>

      <div>
        <Container>
          <OurTeam />
        </Container>
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <Container sx={{ py: 4 }}>
          {/* Your existing content */}
          <Divider />
          <Typography variant='h5' textAlign='center' > Events </Typography>
          <Events /> {/* Render the Events component */}
        </Container>
      </div>

      <div>
        <Container>
          {/* BlogPost component rendering logic */}
          
          <Divider />
          
          {/* Rendering the Partners component */}
          {/* <Typography variant="h5" align='center'>Partners</Typography> */}
          <Partners />
        </Container>
      </div>

      <div>
        <PopoverButtons />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <AdminPanel />
      </div>


    </div>

  );
}

export default App;

