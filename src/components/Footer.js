import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
      <Box
        component="footer"
        display='flex'
        flexDirection='row'

        sx={{
          background: '#333',
          marginLeft: '-1px', // Adjusted margin to pull the left border to the screen edge
          color: '#fff',
          py: 3,
          px: 2,
          textAlign: 'center',
          borderLeft: '1px solid #fff', // Added left border style
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
      {/* Container for the three sections in a row */}
      <Grid container spacing={4}  justifyContent="center">
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body2" gutterBottom>
              We are experts in the field of Digital Health <br/>
              providing advice, guidance and support in health <br/>
              informatics, telemedicine, healthcare technology, <br/>
              electronic medical records and other forms of innovations. <br/>
              {/* Our goal is to assist you, who are working in healing organisations with digital instruments meant for improving patient treatment and outcome. */}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: Bisrate Gebriel, Addis Ababa, Ethiopia <br />
              Email: info@empacthealth.com <br />
              Phone: +25194142184
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.linkedin.com/" color='inherit'>
              <IconButton >
                <LinkedInIcon style={{color: '#c4cef7'}} />
              </IconButton>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=1234567890" color="inherit">
              <IconButton>
                <WhatsAppIcon style={{color: '#2ca548'}} />
              </IconButton>
            </Link>
            <Link href="https://www.facebook.com/" color="inherit">
              <IconButton>
                <FacebookIcon style={{color:'#ded9e6'}}/>
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/" color="inherit">
              <IconButton>
                <InstagramIcon style={{color: '#e96ea1'}} />
              </IconButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
