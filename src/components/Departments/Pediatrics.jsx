import React from 'react'
import image4 from "../../assets/img/departments-4.jpg"
import {motion} from "framer-motion" 
export default function Pediatrics() {
  return (
    <>
    <motion.div className="container"
    initial={{x:200}}
    animate={{x:0}}
    transition={{duration:1}}
    
    >
     <div className="row d-flex flex-row-reverse ">
       <div className="col-lg-4">
       <img src={image4} alt="" className='w-100' />
       </div>
       <div className="col-lg-8 py-4">
         <h3 className=' mainColor fs-2'>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
         <p className='text-muted fs-5'>Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus

Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
       </div>
     </div>
    </motion.div>
     </>
  )
}
