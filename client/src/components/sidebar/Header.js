import { Avatar, Box, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

const Header = () => {
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
                <IconButton>
                    <SettingsIcon sx={{
                        fontSize: '25px',
                        color: 'black'
                    }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Header
