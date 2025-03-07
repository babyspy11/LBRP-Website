import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import DiscordIcon from '@mui/icons-material/Chat';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../images/background.jpg';

function Join() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Box sx={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="md">
        <Box ref={ref} sx={{ py: 8 }}>
          <Typography 
            variant="h2" 
            className={`animate-item ${inView ? 'in-view' : ''}`}
            sx={{ 
              textAlign: 'center',
              mb: 4,
              color: '#ffffff',
              textTransform: 'uppercase',
              fontWeight: 700,
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5)',
              animation: 'shimmer 2s infinite',
              '@keyframes shimmer': {
                '0%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5)' },
                '50%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(0, 123, 255, 0.7)' },
                '100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5)' }
              }
            }}
          >
            Join Our Community
          </Typography>

          <Paper 
            elevation={3} 
            className={`animate-item ${inView ? 'in-view' : ''}`}
            sx={{ 
              p: 4, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Typography variant="h5" sx={{ 
              mb: 3, 
              color: '#007bff',
              textAlign: 'center',
              fontWeight: 600
            }}>
              Apply for Allowlist
            </Typography>
            
            <Typography sx={{ 
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.8
            }}>
              Join our Discord community to submit your allowlist application. Our staff team will review your application 
              and help you get started in the Lost Brotherhood community!
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Join;