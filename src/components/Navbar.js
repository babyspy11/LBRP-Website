import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import serverLogo from '../images/server-logo.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        boxShadow: isScrolled ? 1 : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Toolbar sx={{ 
        p: 0,
        justifyContent: 'flex-start',
        minHeight: '180px',
        position: 'relative'
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          width: '100%',
          justifyContent: 'space-between',
          pl: 0 // Remove left padding
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
          }}>
            <img 
              src={serverLogo} 
              alt="Server Logo" 
              style={{
                height: '250px',
                width: 'auto',
                marginLeft: 0,
                position: 'absolute',
                top: '-50px' // Moved up further from -30px to -50px
              }}
            />
          </Box>
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            mr: 3,
            position: 'absolute',
            bottom: '-1px',
            right: '700px',      // Added right offset to move buttons left
          }}>
            <Button className="nav-link" component={Link} to="/" sx={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)',
              animation: 'shimmerNavLinks 3s infinite',
              fontWeight: 900, // Increased from 'bold' to 900
              '@keyframes shimmerNavLinks': {
                '0%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)' },
                '50%': { textShadow: '0 0 15px rgba(255, 255, 255, 0.7), 0 0 25px rgba(0, 123, 255, 0.5)' },
                '100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)' }
              }
            }}>Home</Button>
            <Button className="nav-link" component={Link} to="/rules" sx={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)',
              animation: 'shimmerNavLinks 3s infinite',
              fontWeight: 900, // Increased from 'bold' to 900
              animationDelay: '0.2s'
            }}>Rules</Button>
            <Button className="nav-link" component={Link} to="/characters" sx={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)',
              animation: 'shimmerNavLinks 3s infinite',
              fontWeight: 'bold', // Added bold styling
              animationDelay: '0.4s'
            }}>Characters</Button>
            <Button className="nav-link" component={Link} to="/join" sx={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.3)',
              animation: 'shimmerNavLinks 3s infinite',
              fontWeight: 'bold', // Added bold styling
              animationDelay: '0.6s'
            }}>Join Us</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;