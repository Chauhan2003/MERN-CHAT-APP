import { Box, Drawer, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import DrawerChatbox from './DrawerChatbox';

const SearchDrawer = ({ openDrawer, setOpenDrawer }) => {
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };
    return (
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
            <Box sx={{
                width: '420px',
                height: '100%',
                padding: '10px'
            }}>
                <IconButton onClick={toggleDrawer(false)}>
                    <ArrowBackIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                </IconButton>
                <Box sx={{
                    width: '100%',
                    background: 'lightgray',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '15px',
                    gap: '5px',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    margin: '10px 0'
                }}>
                    <SearchIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                    <input type='text' placeholder='Search...' style={{
                        width: '100%',
                        padding: '10px',
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        fontSize: '15px'
                    }} />
                </Box>
                <Box sx={{
                    width: '100%',
                    height: 'calc(100% - 100px)',
                    overflowY: 'scroll'
                }}>
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                    <DrawerChatbox />
                </Box>
            </Box>
        </Drawer>
    )
}

export default SearchDrawer
