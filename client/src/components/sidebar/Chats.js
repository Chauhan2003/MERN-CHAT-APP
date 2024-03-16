import { Box } from '@mui/material'
import React from 'react'
import Chatbox from './Chatbox'

const Chats = () => {
    return (
        <Box sx={{
            width: '100%',
            height: 'calc(100% - 55px)',
            overflowY: 'scroll',
            padding: '10px 0'
        }}>
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
        </Box>
    )
}

export default Chats
