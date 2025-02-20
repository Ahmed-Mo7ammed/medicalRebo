import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <>
    <div className='container-fluid main-div'>
   <div className='container '>
<div className="row">
<div className="col-md-8 mt-5 py-5">
< motion.h1
initial={{x:-400,}}
animate={{x:0,}}
transition={{duration:1}}
className='fs-1 fw-bolder mainColor'>WELCOME TO MEDILAB</motion.h1>
<motion.h4 
initial={{x:800,}}
animate={{x:0,}}
transition={{duration:.8}} className='text-muted'> where compassionate care meets advanced medical technology</motion.h4>

</div>
</div>
<div className="row">
<motion.div className='text-center card-style col-md-4'
initial={{x:-400,}}
animate={{x:0,}}
transition={{duration:.8}}
whileInView={{x:0}}
>
<Card   className=' text-center blou-card  py-4'>
      <Card.Body>
        <Card.Title>
        <h3>Why Choose Medilab?</h3>
        </Card.Title>
        <Card.Text className='py-4'>
        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
        </Card.Text>
        <button className='btn btn-primary rounded-5 px-5 '> Learn More </button>
      </Card.Body>
    </Card>
</motion.div>

<motion.div className='col-md-8 col-12 card-style'
initial={{y:800,}}
animate={{y:0,}}
transition={{duration:.8}}
whileInView={{y:0}}>
<div className='text-center card-style p-4 col-lg-4  col-12'>
<Card   className=' text-center hero rounded-4'>
      <Card.Body>
        <Card.Title>
      <span className=' d-block text-center fs-2 py-3 sacColor'> <i className="bi bi-clipboard-data"></i>   </span>
        <h4 className='mainColor'>Corporis voluptates officia eiusmod</h4>
        </Card.Title>
        <Card.Text>
        <p className='text-muted'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className='text-center card-style p-4 col-lg-4  col-12'>
<Card   className=' text-center hero rounded-4'>
      <Card.Body>
        <Card.Title>
      <span className=' d-block text-center fs-2  py-3 sacColor'> <i class="bi bi-gem"></i>   </span>
        <h4 className='mainColor'>Ullamco laboris ladore pan</h4>
        </Card.Title>
        <Card.Text>
        <p className='text-muted'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className='text-center card-style p-4 col-lg-4  col-12'>
<Card   className=' text-center hero rounded-4'>
      <Card.Body>
        <Card.Title>
      <span className=' d-block text-center fs-2  py-3 sacColor'> <i class="bi bi-inboxes"></i>   </span>
        <h4 className='mainColor'>Labore consequatur incidid dolore</h4>
        </Card.Title>
        <Card.Text>
        <p className='text-muted'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
        </Card.Text>
      </Card.Body>
    </Card>
</div>


</motion.div>


</div>
   </div>
   </div>
    </>
  )
}
