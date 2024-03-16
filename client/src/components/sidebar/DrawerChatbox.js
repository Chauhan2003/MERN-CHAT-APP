import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const DrawerChatbox = () => {
    return (
        <Box sx={{
            width: '100%',
            padding: '10px 10px',
            marginInline: 'auto',
            background: '#white',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&:hover': {
                background: '#ECECEC'
            }
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}>
                <Avatar src='' sx={{
                    width: '50px',
                    height: '50px'
                }} />
                <Box>
                    <Typography fontSize={17}>Gagan Chauhan</Typography>
                    <Typography fontSize={13} color={'gray'}>Hlo, how are you</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default DrawerChatbox
