import React from 'react'
import './Appointment.css'
import { useFormik } from 'formik'
import { div } from 'framer-motion/client'

export default function Appointment() {
    function handelclick(values){
      values.name=""
      values.phone=""
      values.date=""
      values.email=""
      alert(" thank you ")


    }
    function validation(values){
let errors={}
if(!values.name){

    errors.name="name is requierd"
} ;
if(!values.email){

    errors.email="email is requierd"
};
if(!values.phone){

    errors.phone="phone is requierd"
};
if(!values.date){

    errors.date="date is requierd"
};
return errors
    }
 const formik = useFormik({
   initialValues:{
    name:"",
    email:"",
    phone:"",
    date:"",
   }, validate : validation ,
   onSubmit : handelclick,
    })
  return (<>
  <div className='Appointment-section'>
    <div className='mt-5 py-5 container'>
      <div className='text-center'>
<h2 className='mainColor'>Appointment</h2>
<p className='text-muted pb-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <form action="" method="post" role="form" className=" form-group" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-4 form-group">
            {formik.errors.name && formik.touched.name && <div className=' mainColor  rounded-3  text-center fs-5 mb-1 text-danger'>
                {formik.errors.name}
                </div>}
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
             
            </div>

            <div className="col-md-4 form-group mt-3 mt-md-0">
            {formik.errors.email && formik.touched.email && <div className=' mainColor rounded-3  text-center fs-5 mb-1 text-danger'>
                {formik.errors.email}
                </div> }
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
            {formik.errors.phone &&  formik.touched.phone &&
            <div className=' mainColor  rounded-3  text-center fs-5 mb-1 text-danger'>
            {formik.errors.phone}
            </div>
            }
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone"  value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
            {formik.errors.date && formik.touched.date &&<div className='mainColor   rounded-3  text-center fs-5 mb-1 text-danger'>
                {formik.errors.date}
                </div>}
              <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"  value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select" >
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
          </div>
          <div className="mt-3">
            
            
           
            
            <div className="text-center"><button type="submit" className='btn btn-primary rounded-5 px-5 ' >Make an Appointment</button></div>
          </div>
        </form>
    </div>
    </div>
    </> )
}
