import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id, token } = useParams();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (password !== confirmPassword) {
                toast.error('Passwords do not match!');
                return;
            }

            await axios.put(`http://localhost:8000/api/user/resetpassword/${id}/${token}`, { password: password })
            setLoading(false);
            navigate('/');
            toast.success('Check your Email to Reset Password!');
        } catch (err) {
            setLoading(false);
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
                }}>Reset Password</Typography>
                <Typography sx={{
                    fontSize: '16px',
                    margin: '5px 0 20px 0',
                    paddingInline: '10px',
                    color: 'gray'
                }}>Enter new password for your account.</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    width: '100%',
                    background: 'white',
                    padding: '30px'
                }}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={password}
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
                            value={confirmPassword}
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
                    <LoadingButton
                        onClick={handleResetPassword}
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
                        <span>Reset Password</span>
                    </LoadingButton>
                </Box>
                <Typography sx={{
                    marginTop: '20px',
                }}>© 2024 LetsChat. Crafted with by Gagan Chauhan</Typography>
            </Box>
        </Box>
    )
}

export default Login
