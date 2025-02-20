import React from 'react'
import image5 from "../../assets/img/departments-5.jpg"
import {motion} from "framer-motion" 
export default function EyeCare() {
  return (
    <>
    <motion.div className="container"
     initial={{x:200}}
     animate={{x:0}}
     transition={{duration:1}}>
     <div className="row d-flex flex-row-reverse ">
       <div className="col-lg-4">
       <img src={image5} alt="" className='w-100' />
       </div>
       <div className="col-lg-8 py-4">
         <h3 className=' mainColor fs-2'>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
         <p className='text-muted fs-5'>Omnis blanditiis saepe eos autem qui sunt debitis porro quia.

Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
       </div>
     </div>
    </motion.div>
     </>
  )
}
