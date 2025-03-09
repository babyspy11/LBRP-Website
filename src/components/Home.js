import React from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import DiscordIcon from '@mui/icons-material/Chat';
import GamepadIcon from '@mui/icons-material/Gamepad';
import backgroundImage from '../images/background.jpg';
import { useInView } from 'react-intersection-observer';
import frame1 from '../images/frame1.jpg'; // Add this import at the top
// Remove the useState import since it's not being used
// import { useState } from 'react';

function Home() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // Add this line to allow multiple triggers
    rootMargin: '-100px' // Add this to trigger slightly before the element comes into view
  });
  // Remove unused state declaration
  // const [state, setState] = useState(0);
  
  return (
    <>
      <Box className="hero-section" sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        '& .fade-up': {
          opacity: 0,
          transform: 'translateY(150px)', // Changed from 100px to 150px
          animation: 'fadeUp 1.8s ease-out forwards', // Changed from 1.2s to 1.8s
        },
        '@keyframes fadeUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(150px)', // Changed from 100px to 150px
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      }}>
        <Container maxWidth={false} sx={{ 
          p: 0,
          m: 0,
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Changed from flex-start to space-between
          gap: 0 // Removed gap since we're using space-between
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', // Changed back from center to flex-start
            maxWidth: '600px',
            textAlign: 'left', // Changed back from center to left
            pl: { xs: 4, md: 8 },
            position: 'relative',
            left: 0
          }}>
            <Typography variant="h1" className="fade-up" sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' }, // Reduced from 2.5rem/4.5rem
              fontWeight: '700',
              mb: 2, // Reduced from 3
              textTransform: 'uppercase',
              letterSpacing: '3px', // Reduced from 4px
              color: '#ffffff',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3)',
              position: 'relative',
              animation: 'shimmer 2s infinite',
              '@keyframes shimmer': {
                '0%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3)' },
                '50%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(0, 123, 255, 0.7), 0 0 60px rgba(0, 123, 255, 0.5)' },
                '100%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3)' }
              }
            }}>
              Venture into the<br />
              Endless Horizons<br />
              of LBRP
            </Typography>
            <Typography variant="h4" className="fade-up" sx={{ 
              mb: 3, 
              animationDelay: '0.4s',
              color: '#007bff',
              maxWidth: '500px', // Reduced from 600px
              fontSize: { xs: '1rem', md: '1.2rem' }, // Added specific font size
              fontWeight: '400',
              lineHeight: '1.4', // Reduced from 1.6
              textShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
              animation: 'shimmerBlue 3s infinite',
              '@keyframes shimmerBlue': {
                '0%': { textShadow: '0 0 10px rgba(0, 123, 255, 0.5)' },
                '50%': { textShadow: '0 0 20px rgba(0, 123, 255, 0.8), 0 0 30px rgba(0, 123, 255, 0.4)' },
                '100%': { textShadow: '0 0 10px rgba(0, 123, 255, 0.5)' }
              }
            }}>
              Unlock a world where your imagination knows no limits. Shape your destiny, form powerful bonds, and dive deep into the heart of LBRP. Join us now and start your epic adventure!
            </Typography>
            <Box className="fade-up" sx={{ 
              display: 'flex', 
              gap: 3,
              animationDelay: '0.6s'
            }}>
              <Button 
                className="button-primary"
                startIcon={<DiscordIcon />}
                href="https://discord.gg/yTvKDB6fpe"
                target="_blank"
                sx={{ fontSize: '1.1rem', py: 1.5, px: 4 }}
              >
                Join Discord
              </Button>
              <Button 
                className="button-primary"
                startIcon={<GamepadIcon />}
                onClick={() => {
                  window.location.href = 'fivem://connect/192.168.1.1';
                  setTimeout(() => {
                    alert('Please make sure FiveM is installed on your system. If it\'s not installed, please download it from fivem.net');
                  }, 2000);
                }}
                sx={{ fontSize: '1.1rem', py: 1.5, px: 4 }}
              >
                Connect FiveM
              </Button>
            </Box>
          </Box>
          {/* New Slideshow Frame */}
          <Box sx={{
            width: '500px', 
            height: '400px', 
            pb: 0,
            ml: { xs: 2, md: 72 },
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
            display: { xs: 'none', md: 'block' }, // Hide on mobile
            boxShadow: '0 0 20px rgba(0, 123, 255, 0.3)'
            // Removed animation and @keyframes floatHorizontal
          }}>
            <Box sx={{
              width: '100%',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pb: 0
              // Removed animation and @keyframes pulse
            }}>
              <img 
                src={frame1} 
                alt="Frame 1"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  padding: '10px'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box ref={ref} className="section" sx={{ 
        py: 10,
        backgroundColor: 'transparent',
        position: 'relative',
        '& .animate-item': {
          opacity: 0,
          clipPath: 'circle(0% at 50% 50%)',
          transition: 'all 4.5s ease-out', // Changed from 2.5s to 3.5s
        },
        '& .animate-item.in-view': {
          opacity: 1,
          clipPath: 'circle(100% at 50% 50%)'
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }
      }}>
        <Container>
          <Typography 
            variant="h2" 
            className={`animate-item ${inView ? 'in-view' : ''}`}
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              fontWeight: '800',
              color: '#007bff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              transitionDelay: '0.3s'
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            <Grid 
              item 
              xs={12} 
              md={4}
              className={`animate-item ${inView ? 'in-view' : ''}`}
              sx={{ 
                transitionDelay: '0.5s'
              }}
            >
              <div className="card" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://i.imgur.com/JGYj5uu.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '2rem',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 1)'
                }
              }}>
                <Typography variant="h5" sx={{ 
                  mb: 2, 
                  color: '#007bff', 
                  fontWeight: '700',
                  textAlign: 'center',
                  mt: 2 // Added top margin
                }}>
                  ACTIVE COMMUNITY
                </Typography>
                <Typography sx={{ 
                  color: '#fff', 
                  lineHeight: '1.8',
                  textAlign: 'center'
                }}>
                  Join our thriving community of dedicated roleplayers and create unforgettable stories.
                </Typography>
              </div>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={4}
              className={`animate-item ${inView ? 'in-view' : ''}`}
              sx={{ 
                transitionDelay: '0.7s'
              }}
            >
              <div className="card" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://i.imgur.com/L5Qc5Yh.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Changed from center to flex-start
                alignItems: 'center',
                padding: '2rem',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 1)'
                }
              }}>
                <Typography variant="h5" sx={{ 
                  mb: 2, 
                  color: '#007bff', 
                  fontWeight: '700',
                  textAlign: 'center',
                  mt: 2 // Added top margin
                }}>
                  CUSTOM FEATURES
                </Typography>
                <Typography sx={{ 
                  color: '#fff', 
                  lineHeight: '1.8',
                  textAlign: 'center'
                }}>
                  Experience unique gameplay mechanics and features tailored for immersive roleplay.
                </Typography>
              </div>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={4}
              className={`animate-item ${inView ? 'in-view' : ''}`}
              sx={{ 
                transitionDelay: '0.9s'
              }}
            >
              <div className="card" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('https://i.imgur.com/9XcV5Rw.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Changed from center to flex-start
                alignItems: 'center',
                padding: '2rem',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 1)'
                }
              }}>
                <Typography variant="h5" sx={{ 
                  mb: 2, 
                  color: '#007bff', 
                  fontWeight: '700',
                  textAlign: 'center',
                  mt: 2 // Added top margin
                }}>
                   MANAGEMENT
                </Typography>
                <Typography sx={{ 
                  color: '#fff', 
                  lineHeight: '1.8',
                  textAlign: 'center'
                }}>
                  Our dedicated staff and management team is always here to help and ensure a great experience.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ 
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            zIndex: 10
          }}>
            <Box sx={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#1a1a1a',
              border: '2px solid #007bff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 123, 255, 0.3)',
              animation: 'pulse 2s infinite',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }
            }}>
              <Typography sx={{
                color: '#007bff',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                LBRP
              </Typography>
            </Box>
            <Typography sx={{
              color: '#007bff',
              fontSize: '1.2rem',
              fontWeight: '500',
              textShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
            }}>
              "Your Journey Begins Now"
            </Typography>
            <Typography sx={{
              color: '#6c757d',
              fontSize: '0.9rem'
            }}>
              @lbrp.india
            </Typography>
          </Box>
    </>
  );
}

export default Home;