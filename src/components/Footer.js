import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import backgroundImage from '../images/background.jpg';
import serverLogo from '../images/server-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#0f0f0f',
      py: 4
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <img src={serverLogo} alt="Server Logo" style={{ height: '80px', marginBottom: '1rem' }} />
            <Typography sx={{ 
              color: '#ffffff', 
              mb: 2,
              fontWeight: 500  // Added font weight
            }}>
              Driven by innovation and creativity, we're constantly evolving and expanding our platform
            </Typography>
          </Grid>

          {/* Explore Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#007bff', mb: 2, fontWeight: 'bold' }}>
              EXPLORE
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#007bff' } }}>Home</Link>
              <Link href="/rulebook" sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#007bff' } }}>RULES</Link>
              <Link href="https://discord.gg/yourserver" sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#007bff' } }}>Discord</Link>
              <Link href="fivem://connect/your-server-ip" sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500, '&:hover': { color: '#007bff' } }}>JOIN US</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#007bff', mb: 2, fontWeight: 'bold' }}>
              CONTACT
            </Typography>
            <Typography sx={{ color: '#ffffff', mb: 2 }}>
              <Box sx={{ pl: 0 }}>Send mail:</Box>
              <Link href="mailto:info@lbrp.com" sx={{ color: '#007bff', textDecoration: 'none' }}>
                info@lbrp.com
              </Link>
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              pl: 16  // Increased padding-left from 12 to 16
            }}>
              <Link href="#" sx={{ color: '#ffffff', '&:hover': { color: '#007bff' } }}><FacebookIcon /></Link>
              <Link href="#" sx={{ color: '#ffffff', '&:hover': { color: '#007bff' } }}><TwitterIcon /></Link>
              <Link href="#" sx={{ color: '#ffffff', '&:hover': { color: '#007bff' } }}><InstagramIcon /></Link>
              <Link href="#" sx={{ color: '#ffffff', '&:hover': { color: '#007bff' } }}><YouTubeIcon /></Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#ffffff', 
            textAlign: 'center', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 4,
            pt: 2
          }}
        >
          COPYRIGHT 2025 BY LOST BROTHERHOOD ROLEPLAY. ALL RIGHTS RESERVED.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;