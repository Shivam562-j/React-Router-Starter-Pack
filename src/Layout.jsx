import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

export const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
