import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

const DashboardAdmin = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Manage Resellers</Typography>
              <Typography>View and control resellers' activity.</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Key Generation</Typography>
              <Typography>Generate and distribute keys.</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAdmin;
