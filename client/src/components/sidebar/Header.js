import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { ChatState } from '../../context/ChatProvider';

axios.defaults.withCredentials = true;

const Header = () => {
    const [open, SetOpen] = useState(false);

    const navigate = useNavigate()
    const { setUser } = ChatState();

    const handleClick = (e) => {
        SetOpen(e.currentTarget);
    };
    const handleClose = () => {
        SetOpen(false);
    };

    const handleLogOut = async (e) => {
        e.preventDefault();

        try {
            await axios.get('http://localhost:8000/api/user/logout');
            setUser(null);
            navigate('/');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }
    return (
        <Box sx={{
            width: '100%',
            height: '55px',
            background: '#F7F7FF',
            paddingInline: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid gray'
        }}>
            <Avatar src='' />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
            }}>
                <IconButton>
                    <SearchIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                </IconButton>
                <IconButton>
                    <GroupAddIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                </IconButton>
                <IconButton onClick={handleClick}>
                    <SettingsIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                </IconButton>
            </Box>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem sx={{
                    paddingInline: '20px'
                }} onClick={handleClose}><Typography onClick={handleLogOut}>Logout</Typography></MenuItem>
            </Menu>
        </Box >
    )
}

export default Header
