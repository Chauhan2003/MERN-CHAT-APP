import React, { useState } from 'react'
import { Avatar, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [photo, setPhoto] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      photo
    }

    console.log(data);
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
        margin: '5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography sx={{
          fontSize: '30px',
          fontWeight: '600'
        }}>Register</Typography>
        <Typography sx={{
          fontSize: '16px',
          margin: '5px 0 20px 0',
          paddingInline: '10px',
          color: 'gray'
        }}>Fill this to create your account</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          background: 'white',
          padding: '30px'
        }}>
          <Box sx={{
            display: 'inline-block',
            width: 'fit-content',
            marginInline: 'auto'
          }}>
            <InputLabel htmlFor="profile-photo-input">
              <Avatar src='' sx={{
                cursor: 'pointer',
                width: '8rem',
                height: '8rem'
              }} />
            </InputLabel>
            <input
              id="profile-photo-input"
              type="file"
              accept="image/*"
              style={{
                display: 'none'
              }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </Box>

          <TextField
            sx={{ width: '100%' }}
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ width: '100%' }}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              label="Confirm Password"
            />
          </FormControl>
          <Button onClick={handleRegister} variant='contained' sx={{
            background: '#7269EF',
            padding: '7px 0px',
            fontSize: '20px',
            '&:hover': {
              background: '#6159CB'
            }
          }}>Register</Button>
        </Box>
        <Typography sx={{
          margin: '20px 0 10px 0',
          fontSize: '16px'
        }}>Already have Account? <Link style={{
          color: '#6159CB'
        }} to='/'>Login</Link></Typography>
        <Typography>© 2024 Lets Chat. Crafted with by Gagan Chauhan</Typography>
      </Box>
    </Box>
  )
}

export default Register
