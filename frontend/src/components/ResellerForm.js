import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const ResellerForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Reseller Registration
      </Typography>
      <form>
        <TextField label="Name" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth required margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default ResellerForm;
