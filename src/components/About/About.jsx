import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFlask, faHeartCircleXmark, faHospital, faPumpMedical, faUserDoctor, faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './About.css'
import Gallery from '../Gallery/Gallery';
export default function About() {
  const [countOfDoctors, setCountOfDoctors] = useState(0)
  const [countOfLabs, setCountOfLabs] = useState(0)
  const [countOfAwards, setCountOfAwards] = useState(0)
  const [countOfDepartments, setCountOfDepartments] = useState(0)
//   function countDoctors(){


// setCountOfDoctors(countOfDoctors+1)

//   }
  useEffect(() => {
    if (countOfAwards <= 149) {
      const intervalId = setInterval(() => {
        setCountOfAwards(countOfAwards + 1);
      }, 10);

      
      return () => clearInterval(intervalId);
    }
  }, [countOfAwards]);
  useEffect(() => {
    if (countOfLabs <= 11) {
      const intervalId = setInterval(() => {
        setCountOfLabs(countOfLabs + 1);
      }, 100);

      
      return () => clearInterval(intervalId);
    }
  }, [countOfLabs]);
  useEffect(() => {
    if (countOfDoctors <= 84) {
      const intervalId = setInterval(() => {
        setCountOfDoctors(countOfDoctors + 1);
      }, 20);

      
      return () => clearInterval(intervalId);
    }
  }, [countOfDoctors]);

  useEffect(() => {
    if (countOfDepartments <= 17) {
      const intervalId = setInterval(() => {
        setCountOfDepartments(countOfDepartments + 1);
      }, 80);

      
      return () => clearInterval(intervalId);
    }
  }, [countOfDepartments]);

  
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row d-flex  pt-5">
          <motion.div className="col-md-6" 
          initial={{x:-200}}
          animate={{x:0}}
          transition={{duration:1}}
          >
          <motion.iframe
    width="100%"
    height="310"
    src="https://www.youtube.com/embed/Y7f98aduVJ8"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:1 , delay:1}}
  ></motion.iframe>
          </motion.div>
          <motion.div className="col-md-6 d-flex flex-column justify-content-center" 
            initial={{x:200}}
            animate={{x:0}}
            transition={{duration:1}}>
        <div className=" justify-content-center">
        <h2 className='span-icon  fw-bold fs-1'>About Us</h2>
        <p className='text-dark'>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>
        </div>
        <div className='d-flex'>
          <span className='px-3 fs-1  span-icon' > <FontAwesomeIcon icon={faVialCircleCheck} /></span>
          <div>
          <h5 className='mainColor' >Ullamco laboris nisi ut aliquip consequat</h5>
          <p className='text-dark'>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
          </div>
        </div>
        <div className='d-flex'>
          <span className='px-3 fs-1  span-icon' > <FontAwesomeIcon icon={faPumpMedical} /> </span>
          <div>
          <h5 className='mainColor'>Magnam soluta odio exercitationem reprehenderi</h5>
          <p className='text-dark'>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
          </div>
        </div>
        <div className='d-flex'>
          <span className='px-3 fs-1 span-icon' >  <FontAwesomeIcon icon={faHeartCircleXmark}/> </span>
          <div>
          <h5 className='mainColor'>Voluptatem et qui exercitationem</h5>
          <p className='text-dark'>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
          </div>
        </div>
          </motion.div>
        </div>
       
      </div>
      <div className='container-fluid'>
       <div className="card-about row d-flex justify-content-center align-items-center px-5">
<div className="col-md-3   my-5  px-3">
<div className='d-flex flex-column justify-content-between align-items-center singel-card-about text-center'>
<div className="icon  text-center mb-4">
<FontAwesomeIcon icon={faUserDoctor} className=' singel-icon  ' />
</div>
<div className="stats-item mt-5  ">
              <span className="fs-1 mainColor">{countOfDoctors}</span>
              <p className="fs-2 mainColor">Doctors</p>
 </div>
</div>

</div>
<div className="col-md-3   my-5  px-3">
<div className='d-flex flex-column justify-content-between align-items-center singel-card-about text-center'>
<div className="icon  text-center mb-4">
<FontAwesomeIcon icon={faHospital} className=' singel-icon  ' />
</div>
<div className="stats-item mt-5  ">
              <span className="fs-1 mainColor">{countOfDepartments}</span>
              <p className="fs-2 mainColor">Departments</p>
 </div>
</div>

</div>
<div className="col-md-3   my-5  px-3">
<div className='d-flex flex-column justify-content-between align-items-center singel-card-about text-center'>
<div className="icon  text-center mb-4">
<FontAwesomeIcon icon={faFlask} className=' singel-icon  '/>
</div>
<div className="stats-item mt-5  ">
              <span className="fs-1 mainColor">{countOfLabs}</span>
              <p className="fs-2 mainColor">Research Labs

</p>
 </div>
</div>

</div>
<div className="col-md-3   my-5  px-3">
<div className='d-flex flex-column justify-content-between align-items-center singel-card-about text-center'>
<div className="icon  text-center mb-4">
<FontAwesomeIcon icon={faAward} className=' singel-icon  '/>
</div>
<div className="stats-item mt-5  ">
              <span className="fs-1 mainColor">{countOfAwards}</span>
              <p className="fs-2 mainColor">Awards</p>
 </div>
</div>

</div> 
        </div>
       </div>
       <div className="gallery">
        <Gallery/>
       </div>
    </>
  );
}

