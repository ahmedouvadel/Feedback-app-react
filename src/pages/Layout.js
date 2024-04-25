import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='container'>
      <Nav></Nav>

      <Outlet />

      
    </div>
  )
}

export default Layout