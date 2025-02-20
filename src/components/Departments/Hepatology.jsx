import React from 'react'
import image3 from "../../assets/img/departments-3.jpg"
import {motion} from "framer-motion" 
export default function Hepatology() {
  return (
    <>
    <motion.div className="container"
    initial={{x:200}}
    animate={{x:0}}
    transition={{duration:1}}
    >
     <div className="row d-flex flex-row-reverse ">
       <div className="col-lg-4">
       <img src={image3} alt="" className='w-100' />
       </div>
       <div className="col-lg-8 py-4">
         <h3 className=' mainColor fs-2'>Impedit facilis occaecati odio neque aperiam sit</h3>
         <p className='text-muted fs-5'>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut

Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
       </div>
     </div>
    </motion.div>
     </>
  )
}
