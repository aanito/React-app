import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: '#333',
        color: '#fff',
        py: 4,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ mb: 2 }}>
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
        <Link href="https://twitter.com/" color="inherit">
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/" color="inherit">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Link>
      </Box>
      <Typography variant="body2" component="p">
        Address: 123 Street Name, City, Country
        <br />
        Email: info@example.com
        <br />
        Phone: +1 234 5678
      </Typography>
    </Box>
  );
}

export default Footer;
