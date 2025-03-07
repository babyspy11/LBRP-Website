import React from 'react';
import { Container, Typography, Paper, Button, Box, Stepper, Step, StepLabel } from '@mui/material';

function JoinUs() {
  const steps = ['Join Discord', 'Read Rules', 'Submit Application', 'Get Whitelisted'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
        Join Our Community
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Stepper activeStep={-1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          href="https://discord.gg/your-discord-link"
          target="_blank"
          sx={{ mb: 2 }}
        >
          Join Our Discord
        </Button>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Start your journey in Lost Brotherhood by joining our Discord community
        </Typography>
      </Box>
    </Container>
  );
}

export default JoinUs;