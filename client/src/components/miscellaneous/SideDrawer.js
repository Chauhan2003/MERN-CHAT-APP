import React, { useState } from 'react';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ChatState } from '../../context/ChatProvider';
import ProfileDialog from './ProfileDialog';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const SideDrawer = () => {
    const [anchorElNotification, setAnchorElNotification] = useState(null);
    const [anchorElAvatar, setAnchorElAvatar] = useState(null);
    const { user, setUser } = ChatState();
    const navigate = useNavigate();

    const handleClickNotification = (event) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleClickAvatar = (event) => {
        setAnchorElAvatar(event.currentTarget);
    };

    const handleCloseNotification = () => {
        setAnchorElNotification(null);
    };

    const handleCloseAvatar = () => {
        setAnchorElAvatar(null);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        setAnchorElAvatar(null);

        try {
            await axios.get(`http://localhost:8000/api/user/logout`);
            setUser(null);
            navigate('/');
            toast.success('Logout Successfully');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#7269EF',
            color: 'white',
            width: '100%',
            padding: '5px 20px 5px 20px'
        }}>
            <Tooltip title="Search user to chat" placement="bottom">
                <Button sx={{
                    color: 'white',
                    padding: '10px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#6159CB',

                    '&:hover': {
                        background: '#6159CB'
                    }
                }}>
                    <SearchIcon sx={{
                        color: 'white'
                    }} />
                    <Typography sx={{
                        '@media (max-width: 768px)': {
                            display: "none"
                        }
                    }}>Search User</Typography>
                </Button>
            </Tooltip>
            <Typography fontSize={'30px'}>LetsChat</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
            }}>
                <Box>
                    <IconButton
                        aria-controls={anchorElNotification ? 'notification-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={anchorElNotification ? 'true' : undefined}
                        onClick={handleClickNotification}
                    >
                        <NotificationsIcon sx={{
                            color: 'white',
                            fontSize: '27px'
                        }} />
                    </IconButton>
                    <Menu
                        id="notification-menu"
                        anchorEl={anchorElNotification}
                        open={Boolean(anchorElNotification)}
                        onClose={handleCloseNotification}
                    >
                        {/* Add your notification menu items here */}
                    </Menu>
                </Box>
                <Box>
                    <Avatar
                        aria-controls={anchorElAvatar ? 'avatar-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={anchorElAvatar ? 'true' : undefined}
                        onClick={handleClickAvatar}
                        src={user.photo}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                    <Menu
                        id="avatar-menu"
                        anchorEl={anchorElAvatar}
                        open={Boolean(anchorElAvatar)}
                        onClose={handleCloseAvatar}
                    >
                        <ProfileDialog user={user}>
                            <MenuItem>Profile</MenuItem>
                        </ProfileDialog>
                        <MenuItem onClick={handleCloseAvatar}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default SideDrawer;
