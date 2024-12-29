import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const UserManagement = () => {
  const [agencies, setAgencies] = useState([]);
  const [agencyName, setAgencyName] = useState('');

  useEffect(() => {
    const fetchAgencies = async () => {
      // Replace with API call
      const dummyData = [{ _id: 1, name: 'Agency A' }, { _id: 2, name: 'Agency B' }];
      setAgencies(dummyData);
    };
    fetchAgencies();
  }, []);

  const handleCreateAgency = async () => {
    // Replace with API call
    const newAgency = { _id: Math.random(), name: agencyName };
    setAgencies([...agencies, newAgency]);
    setAgencyName('');
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Manage Agencies
      </Typography>
      <TextField
        label="Agency Name"
        variant="outlined"
        fullWidth
        value={agencyName}
        onChange={(e) => setAgencyName(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCreateAgency} fullWidth>
        Create Agency
      </Button>
      <List>
        {agencies.map((agency) => (
          <ListItem key={agency._id}>
            <ListItemText primary={agency.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserManagement;
