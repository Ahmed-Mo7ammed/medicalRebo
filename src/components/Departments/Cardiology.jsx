import React from 'react'
import image1 from "../../assets/img/departments-1.jpg"
import {motion} from "framer-motion" 
export default function Cardiology() {
  return (
    <>
   <motion.div className="container"
   initial={{x:200}}
   animate={{x:0}}
   transition={{duration:1}}>
    <div className="row d-flex flex-row-reverse ">
      <div className="col-lg-4">
      <img src={image1} alt="" className='w-100' />
      </div>
      <div className="col-lg-8 py-4">
        <h3 className=' mainColor fs-2'>Cardiology</h3>
        <p className='text-muted fs-5'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka

Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
      </div>
    </div>
   </motion.div>
    </>
  )
}
