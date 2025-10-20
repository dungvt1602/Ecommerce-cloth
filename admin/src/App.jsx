import React, { useEffect, useState } from 'react'
import Add from './pages/Add.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import Lists from './pages/Lists.jsx'
import Order from './pages/Order.jsx'
import Login from './components/Login.jsx'
import { ToastContainer } from 'react-toastify'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;



const App = () => {

  const [token, getToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div>
      <ToastContainer />
      {
        token === "" ? <Login getToken={getToken} /> :
          <>
            <Navbar setToken={getToken} />
            <hr className='border-0 h-0.25 bg-gray-200' />
            <div className='flex w-full'>
              <Sidebar />
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<Lists token={token} />} />
                <Route path='/order' element={<Order token={token} />} />
                <Route path='/login' element={<Login token={token} />} />
              </Routes>
            </div>
          </>
      }

    </div>

  )
}

export default App