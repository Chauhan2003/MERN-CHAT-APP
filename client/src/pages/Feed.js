import React from 'react'
import { ChatState } from '../context/ChatProvider'
import { Box } from '@mui/material';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

const Feed = () => {
  const { user } = ChatState();
  return (
    <div style={{
      width: '100%'
    }}>
      {
        user && <SideDrawer />
      }
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '91.5vh',
        padding: '10px'
      }}>
        {
          user && <MyChats />
        }
        {
          user && <ChatBox />
        }
      </Box>
    </div>
  )
}

export default Feed
