import React from 'react'
import image2 from "../../assets/img/departments-2.jpg"
import {motion} from "framer-motion" 
export default function Neurology() {
  return (
    <>
   <motion.div className="container" 
   initial={{x:200}}
   animate={{x:0}}
   transition={{duration:1}}
   >
    <div className="row d-flex flex-row-reverse ">
      <div className="col-lg-4">
      <img src={image2} alt="" className='w-100' />
      </div>
      <div className="col-lg-8 py-4">
        <h3 className=' mainColor fs-2'>Et blanditiis nemo veritatis excepturi</h3>
        <p className='text-muted fs-5'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka

Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pa</p>
      </div>
    </div>
   </motion.div>
    </>
  )
}
