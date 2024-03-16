import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%'
        }}>
            <Header />
            <Chats />
        </Box>
    )
}

export default Sidebar
