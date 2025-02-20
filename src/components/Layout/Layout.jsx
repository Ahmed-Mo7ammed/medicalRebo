import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from '../Navbar/CustomNavbar '
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
   <CustomNavbar />

    <Outlet></Outlet>
    <Footer/>
    </>
 
  )
}
