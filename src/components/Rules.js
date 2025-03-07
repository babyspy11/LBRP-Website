import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function Rules() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
        Server Rules
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>General Rules</Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" sx={{ mb: 1 }}>Stay in character at all times during RP</Typography>
          <Typography component="li" sx={{ mb: 1 }}>No combat logging or rage quitting</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Respect all players and staff members</Typography>
          <Typography component="li" sx={{ mb: 1 }}>No cheating or exploiting game mechanics</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Roleplay Guidelines</Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" sx={{ mb: 1 }}>Maintain realistic roleplay scenarios</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Use appropriate communication channels</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Follow the server's economy rules</Typography>
          <Typography component="li" sx={{ mb: 1 }}>Report issues through proper channels</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Rules;