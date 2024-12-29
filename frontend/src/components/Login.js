import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField label="Email" variant="outlined" fullWidth required margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth required margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
