import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const DashboardUser = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6">Key Usage</Typography>
          <Typography>Monitor your key usage and limits.</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardUser;
