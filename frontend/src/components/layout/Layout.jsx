import React from 'react'
import {Outlet} from 'react-router-dom'
import './layout.css'
function Layout() {
  return (
    <>
    <div className='page_title'>TODO List</div>
    <hr />
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default Layout
