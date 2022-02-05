import React, { useState } from 'react';
import { FormControl, Button, Box, TextField } from '@mui/material';
import { register } from '../../services/auth/authService';

export const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = async () => {
    await register(userName, password);
  }

  return (
    <Box>
      <FormControl sx={{ m: 4, width: 300 }}>
        <TextField id="outlined-basic" label="userName" variant="standard" margin="normal" fullWidth />
        <TextField id="outlined-basic" label="password" variant="standard" margin="normal" fullWidth type='password' />
        <Button sx={{ m: 8, width: 150 }} color="info" variant="contained" onClick={() => handleClick()}>SignUp</Button>
      </FormControl>
    </Box>
  )
}
