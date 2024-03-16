import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'
import ResetPassword from './pages/ResetPassword'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
