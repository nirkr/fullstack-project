import React, { useState } from 'react';
import { FormControl, Button, Box, TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import { register } from '../../services/auth/authService';

export const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const { data } = await register(userName, password);
    localStorage.setItem('token', data.token);
  }

  return (
    <Box>
      <FormControl sx={{ m: 4, width: 300 }}>
        <TextField id="outlined-basic" label="User name" variant="standard" margin="normal" fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={e => setUserName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Password" variant="standard" margin="normal" fullWidth type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <Button sx={{ m: 8, width: 150 }} color="info" variant="contained" onClick={() => handleClick()}>SignUp</Button>
      </FormControl>
    </Box>
  )
}
