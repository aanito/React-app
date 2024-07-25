import React from 'react';
import { Box, Typography } from '@mui/material';

const headerContainerStyle = {
  position: 'relative',
  padding: '20px 40px',
  backgroundColor: '#e0f7fa', // Light blue background for the header container
  borderRadius: '8px',
  marginBottom: '40px',
  marginLeft: '60px',
  textAlign: 'center', // Center-align the text
};

const headerStyle = {
  fontSize: '2.0rem',
  fontWeight: 'bold',
  color: '#04386d',
  textTransform: 'uppercase',
  marginBottom: '10px', // Slightly reduce bottom margin
  position: 'relative',
  display: 'inline-block',
  paddingBottom: '10px',
  '::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '4px',
    background: 'linear-gradient(90deg, rgba(4, 56, 109, 0) 0%, rgba(4, 56, 109, 1) 50%, rgba(4, 56, 109, 0) 100%)',
    borderRadius: '2px',
  },
};

const backgroundStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '200px',
  height: '100%',
  background: 'rgba(4, 56, 109, 0.2)',
  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
};

const Header = ({ text }) => {
  return (
    <Box sx={headerContainerStyle}>
      <Box sx={backgroundStyle} />
      <Typography sx={headerStyle}>{text}</Typography>
    </Box>
  );
};

export default Header;
