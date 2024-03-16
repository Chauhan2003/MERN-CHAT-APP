import { Avatar, Badge, Box, Typography } from '@mui/material'
import React from 'react'

const Chatbox = () => {
    return (
        <Box sx={{
            width: '95%',
            padding: '10px 10px',
            marginInline: 'auto',
            background: '#F7F7FF',
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
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px'
            }}>
                <Typography fontSize={15}>Date</Typography>
                <Box>
                    <Badge badgeContent={4} color="primary">
                    </Badge>
                </Box>
            </Box>
        </Box>
    )
}

export default Chatbox
