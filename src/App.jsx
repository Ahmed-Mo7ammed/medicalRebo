import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services'
import Departments from './components/Departments/Departments'
import Cardiology from './components/Departments/Cardiology'
import Neurology from './components/Departments/Neurology'
import Hepatology from './components/Departments/Hepatology'
import Pediatrics from './components/Departments/Pediatrics'
import EyeCare from './components/Departments/EyeCare'
import Appointment from './components/appointment/Appointment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let router=createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"about", element:<About/>},
    {path:"home", element:<Home/>},
    {path:"Appointment", element:<Appointment/>},
    {path:"contact-us", element:<Contact/>},
    {path:"services", element:<Services/>},
    {path:"departments", element:<Departments/> , children :[
      {index:true , element:<Cardiology/>},
      {path:"Neurology" , element : <Neurology/>},
      {path:"Hepatology" , element : <Hepatology/>},
      {path:"Pediatrics" , element : <Pediatrics/>},
      {path:"EyeCare" , element : <EyeCare/>},
      
    ]},
    {path:"*", element:<Notfound/>},
  ] }
])
function App() {
  
  return (
    <>
      
      <RouterProvider router={router}>
    <Layout/>
      </RouterProvider>
    </>
  )
}

export default App
