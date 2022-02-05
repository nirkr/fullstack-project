import React, { useState } from 'react';
import { FormControl,Button, Box, TextField } from '@mui/material';
import {register} from '../../services/auth/authService';

export const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = async () => {
    await register(userName, password);
  }

  return (
      // <form onSubmit={onSubmit}>
      //   <h1> Sign Up</h1>
      //   <div className='form-group input'>
      //     <label> userName</label>  
      //     <input value={userName} className='form-control' onChange={(e)=>setUserName(e.target.value)} />
      //   </div>
      //   <div className='form-group input'>
      //     <label> password</label>  
      //     <input type='password' value={password} className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
      //   </div>
      //   <button className='btn btn-primary' >SignUp</button>
      // </form>
<Box>

  <FormControl sx={{ m:4, width: 300 }}>
    <TextField width='big' id="outlined-basic" label="userName" variant="standard" margin="normal" fullWidth/>
    <TextField id="outlined-basic" label="password" variant="standard" margin="normal" fullWidth type='password'/>
    <Button sx={{ m:8, width: 150 }} color="info" variant="contained" onClick={() => handleClick('./signup')}>SignUp</Button>
  </FormControl>
</Box>
  )    
}
