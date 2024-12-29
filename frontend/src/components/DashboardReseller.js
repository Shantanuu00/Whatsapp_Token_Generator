import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

const DashboardReseller = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Reseller Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Manage Agencies</Typography>
              <Typography>Create and manage your user accounts.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Distribute Keys</Typography>
              <Typography>Assign keys to agencies securely.</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardReseller;
