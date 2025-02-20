import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import './Departments.css'
import Accordion from 'react-bootstrap/Accordion';

import {motion} from "framer-motion" 
export default function Departments() {
  return (
    <>
     <div className="container py-5 ">

     <div class="text-center mt-5">
        <h2 className='fs-1 mainColor   pt-5 '>Departments</h2>
        <p className='fs-4 py-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
<div className="row mt-5">
<motion.div className="col-12 mb-5"
initial={{y:-250}}
animate={{y:0}}
transition={{duration:1}}
>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='mt-3'>
        <Accordion.Header>Feugiat scelerisque varius morbi enim nunc faucibus?</Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-3 '>
        <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-3' >
        <Accordion.Header>Dolor sit amet consectetur adipiscing elit pellentesque?</Accordion.Header>
        <Accordion.Body>
        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mt-3'>
        <Accordion.Header>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
        <Accordion.Body>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mt-3'>
        <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
        <Accordion.Body>
        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mt-3'>
        <Accordion.Header>Tempus quam pellentesque nec nam aliquam sem et tortor?</Accordion.Header>
        <Accordion.Body>
        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</motion.div>
<div className='col-lg-3 my-5'>

 < ul className="me-auto list-unstyled">
<li className=' depart-nav'><NavLink className='depart-nav-link' to="">Cardiology</NavLink></li>
<li className=' depart-nav'><NavLink className='depart-nav-link' to="Neurology">Neurology</NavLink></li>
<li className=' depart-nav'><NavLink className='depart-nav-link' to="Hepatology">Hepatology</NavLink></li>
<li className=' depart-nav'><NavLink className='depart-nav-link' to="Pediatrics">Pediatrics</NavLink></li>
<li className=' depart-nav'><NavLink className='depart-nav-link' to="EyeCare">Eye Care</NavLink></li>
        
         
        
        
             
          
          </ul>
          </div>
<div className='col-lg-9'

>

    <Outlet></Outlet>
</div>

</div>

     </div>
    </>
  )
}

