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
      sx={{
        background: '#333',
        color: '#fff',
        py: 3,
        px: 2,
        textAlign: 'center',
      }}
    >
      {/* Container for the three sections in a row */}
      <Grid container justifyContent="center" spacing={4}>
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body2" gutterBottom>
              Insert a brief description of your organization and what you stand for.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: 123 Street Name, City, Country <br />
              Email: info@example.com <br />
              Phone: +1 234 5678
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.linkedin.com/" color="inherit">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=1234567890" color="inherit">
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
            </Link>
            <Link href="https://www.facebook.com/" color="inherit">
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/" color="inherit">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
