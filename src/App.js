import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { Typography, Container, Divider } from '@mui/material';
import AppBarComponent from './components/AppBar';
import FixedSidebar from './components/FixedSidebar';
import ServiceCard from './components/ServiceCard';
import BlogPost from './components/BlogPost';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Partners from './components/Partners';
import PopoverButtons from './components/PopoverButtons';
import Footer from './components/Footer';
import AdminPanel from './components/Admin/AdminPanel';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import Header from './components/HeaderStyle';

const MainContent = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  
  const hideComponents = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogposts');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogPosts();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const headerStyle = {
    fontSize: '2.0rem',
    fontWeight: 'bold',
    color: '#04386d',
    textTransform: 'uppercase',
    marginBottom: '20px',
  };

  // Sort the blogPosts array based on the date property in descending order
  const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '100px', marginLeft: '120px' }}>
      {!hideComponents && <AppBarComponent toggleDrawer={toggleDrawer} />}
      {!hideComponents && <FixedSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />}
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route exact path="/#events" Component={ Events } />
        <Route path="/" element={
          <>
            <Header text="Our Services" />

            <ServiceCard />

            <Header text="Trending" />
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
            <Header text="Our Team" />

              <OurTeam />
      
            <Header text="Events" />

              <Events />
            </Container>

            <Header text="Testimonials" />
              <Testimonials />
            
            <Header text="Our Partners" />
              <Partners />

            <PopoverButtons />

            <Footer />

            <AdminPanel />
          </>
        } />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
// import { Typography, Container, Divider } from '@mui/material';
// import AppBarComponent from './components/AppBar';
// import FixedSidebar from './components/FixedSidebar';
// import ServiceCard from './components/ServiceCard';
// import BlogPost from './components/BlogPost';
// import OurTeam from './components/OurTeam';
// import Testimonials from './components/Testimonials';
// import Events from './components/Events';
// import Partners from './components/Partners';
// import PopoverButtons from './components/PopoverButtons';
// import Footer from './components/Footer';
// import AdminPanel from './components/Admin/AdminPanel';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';

// const MainContent = () => {
//   const location = useLocation();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [blogPosts, setBlogPosts] = useState([]);
  
//   const hideComponents = location.pathname === '/login' || location.pathname === '/register';

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/blogposts');
//         setBlogPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching blog posts:', error);
//       }
//     };
//     fetchBlogPosts();
//   }, []);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   const headerStyle = {
//     fontSize: '2.0rem',
//     fontWeight: 'bold',
//     color: '#04386d',
//     textTransform: 'uppercase',
//     marginBottom: '20px',
//   };

//   // Sort the blogPosts array based on the date property in descending order
//   const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

//   return (
//     <div className="app-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '100px', marginLeft: '120px' }}>
//       {!hideComponents && <AppBarComponent toggleDrawer={toggleDrawer} />}
//       {!hideComponents && <FixedSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />}
      
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route exact path="/#events" Component={ Events } />
//         <Route path="/" element={
//           <>
//             <Container>
//               <Typography variant="h5" align='center' gutterBottom style={headerStyle}>
//                 Our Services
//               </Typography>
//               <ServiceCard />
//             </Container>

//             <Container>

//               <Typography variant="h5" align='center' gutterBottom style={headerStyle}>
//                 Trends 
//               </Typography>
//               {sortedBlogPosts.map((post, index) => (
//                 <React.Fragment key={index}>
//                   {post.isFeatured && <BlogPost key={index} post={post} isFeatured />}
//                 </React.Fragment>
//               ))}
//               <Divider />
//               <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {sortedBlogPosts.map((post, index) => (
//                   <React.Fragment key={index}>
//                     {!post.isFeatured && (
//                       <BlogPost key={index} post={post} isFeatured={false} />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </Container>
//             </Container>

//             <Container >
//               <Typography variant="h5" align='center' gutterBottom style={headerStyle}>
//                 Our Team

//               </Typography>

//               <OurTeam />
              
//             </Container>

//             <Container sx={{ py: 4 }}>
//               <Divider />
//                 <Typography variant="h5" align='center' gutterBottom style={headerStyle}>Events</Typography>
//               <Events />
//             </Container>

//             <Container>
//               <Typography variant="h5" align='center' gutterBottom style={headerStyle}>
//                 Testimonials
//               </Typography>
//               <Testimonials />
//             </Container>

//             <Container>
//               <Divider />
//               <Typography variant="h5" align='center' gutterBottom style={headerStyle}>
//                 Our partners
//               </Typography>
//               <Partners />
//             </Container>

//             <PopoverButtons />

//             <Footer />

//             <AdminPanel />
//           </>
//         } />
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <MainContent />
//     </Router>
//   );
// }

// export default App;
