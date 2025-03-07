import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import backgroundImage from '../images/background.jpg';

function Footer() {
  return (
    <Box sx={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      py: 3
    }}>
      <Container>
        <Typography variant="body2" sx={{ color: '#ffffff', textAlign: 'center' }}>
          © 2025 Lost Brotherhood. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;