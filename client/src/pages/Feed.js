import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar';
import Bg from '../images/Background-Image.jpg';

const Feed = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'hidden'
      }}>
        <Box sx={{
          minWidth: '420px',
          height: '100%',
          borderRight: '1px solid gray'
        }}>
          {/* Sidebar content */}
          <Sidebar />
        </Box>
        <Box sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}>
          {/* Chat content */}
        </Box>
      </Box>
    </Box>
  )
}

export default Feed;
