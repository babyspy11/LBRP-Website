import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

function Characters() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
        Character Creation
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Character Guidelines</Typography>
            <Typography paragraph>
              Create a unique and compelling character that fits within our roleplay universe.
              Your character should have:
            </Typography>
            <ul>
              <li>Detailed backstory</li>
              <li>Clear motivations</li>
              <li>Realistic personality traits</li>
              <li>Appropriate appearance</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>Available Roles</Typography>
              <ul>
                <li>Civilian</li>
                <li>Law Enforcement</li>
                <li>Criminal</li>
                <li>Business Owner</li>
                <li>Medical Staff</li>
                <li>Mechanic</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Characters;