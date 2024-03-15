import React, { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [photo, setPhoto] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('file', photo)
    data.append('upload_preset', "chat-profile")
    const cloudName = "dawqwxx0p";
    const resourceType = "image";
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    try {
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      var photoURL = secure_url;
    } catch (err) {
      toast.error('Unable To Upload Profile Photo');
    }

    const bodyData = {
      name,
      email,
      password,
      photoURL
    }
    try {
      if (password !== confirmPassword) {
        return alert("Passwords do not match");
      }
      const response = await axios.post(`http://localhost:8000/api/user/register`, bodyData);
      setLoading(false);
      toast.success('Register Successfully');
      navigate('/');
    } catch (err) {
      setLoading(false)
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
          {/* <Button onClick={handleRegister} disabled={loading} variant='contained' sx={{
            background: '#7269EF',
            padding: '7px 0px',
            fontSize: '20px',
            '&:hover': {
              background: '#6159CB'
            }
          }}>Register</Button> */}
          <LoadingButton
            onClick={handleRegister}
            loading={loading}
            variant="contained"
            sx={{
              background: '#7269EF',
              padding: '7px 0px',
              fontSize: '20px',
              '&:hover': {
                background: '#6159CB'
              }
            }}
          >
            <span>Register</span>
          </LoadingButton>
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
