import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'
import ResetPassword from './pages/ResetPassword'
import { ChatState } from './context/ChatProvider'

const App = () => {
  const { user } = ChatState();

  return (
    <BrowserRouter>
      <Routes>
        {
          user ? (
            <>
              <Route path='/' element={<Navigate to='/feed' />} />
              <Route path='/feed' element={<Feed />} />
            </>
          ) : (
            <>
              <Route path='/feed' element={<Navigate to='/' />} />
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
