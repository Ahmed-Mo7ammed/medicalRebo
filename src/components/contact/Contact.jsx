import React, { useState } from 'react'
import './Contact.css'
import { faEnvelope, faMapMarkerAlt, faPhone, faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 31.0343, // خط العرض
  lng: 31.3552 // خط الطول
};
export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (<>
    
    
     <div className="container py-5 ">

     <div class="text-center mt-5">
        <h2 className='fs-1 mainColor   pt-5 '>Contact Us</h2>
        <p className='fs-4 py-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
<div className="row mt-5">

<div className='col-lg-4 my-5'>
        
<div className='d-flex'>
          <span className='px-3 fs-1  span-icon' > <FontAwesomeIcon icon={faMapMarkerAlt} /></span>
          <div>
          <h2 className='mainColor' >Location</h2>
          <p className='text-dark'>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        <div className='d-flex'>
          <span className='px-3 fs-1  span-icon' > <FontAwesomeIcon icon={faPhone} /></span>
          <div>
          <h2 className='mainColor' >Call Us</h2>
          <p className='text-dark'>00201062364985</p>
          </div>
        </div>
        <div className='d-flex'>
          <span className='px-3 fs-1  span-icon' >  <FontAwesomeIcon icon={faEnvelope} /></span>
          <div>
          <h2 className='mainColor' >Email Us</h2>
          <p className='text-dark'>info@example.com</p>
          </div>
        </div>
 
          </div>
<div className='col-lg-8'>

<LoadScript
      googleMapsApiKey=" " // استبدل هذا برمز API الخاص بك
      onLoad={() => setMapLoaded(true)}
    >
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>جاري تحميل الخريطة...</div>
      )}
    </LoadScript>
</div>

</div>

     </div>
    
      
    </>
  )
}
