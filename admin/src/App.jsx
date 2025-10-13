import React from 'react'
import Add from './pages/Add.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import Lists from './pages/Lists.jsx'
import Order from './pages/Order.jsx'



const App = () => {
  return (
    <div>

      <Navbar />
      <hr className='border-0 h-0.25 bg-gray-200' />
      <div className='flex w-full'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<Lists />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
    </div>

  )
}

export default App