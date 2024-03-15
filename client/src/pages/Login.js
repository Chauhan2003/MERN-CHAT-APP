import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password
    }

    try {
      await axios.post(`http://localhost:8000/api/user/login`, data);
      setLoading(false);
      toast.success('Login Successfully');
      navigate('/feed');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        maxWidth: '450px',
        width: '100%',
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography sx={{
          fontSize: '30px',
          fontWeight: '600'
        }}>Login</Typography>
        <Typography sx={{
          fontSize: '16px',
          margin: '5px 0 20px 0',
          paddingInline: '10px',
          color: 'gray'
        }}>Enter your email and password to access the platform.</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          background: 'white',
          padding: '30px'
        }}>
          <TextField
            sx={{ width: '100%' }}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button onClick={handleLogin} variant='contained' sx={{
            background: '#7269EF',
            padding: '7px 0px',
            fontSize: '20px',
            '&:hover': {
              background: '#6159CB'
            }
          }}>Login</Button>
        </Box>
        <Typography sx={{
          margin: '20px 0 10px 0',
          fontSize: '16px'
        }}>Don't have Account? <Link style={{
          color: '#6159CB'
        }} to='/register'>Register</Link></Typography>
        <Typography>© 2024 Lets   Chat. Crafted with by Gagan Chauhan</Typography>
      </Box>
    </Box>
  )
}

export default Login
