import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ChatState } from '../../context/ChatProvider';

const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoding] = useState(false)
    const [loadingChat, setLoadingChat] = useState();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { user } = ChatState();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                gap: '10px'
            }}>
                <Box>
                    <IconButton
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <NotificationsIcon sx={{
                            color: 'white',
                            fontSize: '27px'
                        }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    </Menu>
                </Box>
                <Box>
                    <Avatar
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        src={user.photo}
                        sx={{
                            cursor: 'pointer'
                        }} />
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box >
    )
}

export default SideDrawer
