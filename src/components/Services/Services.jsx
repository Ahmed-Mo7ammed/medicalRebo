import React from 'react'
import './Services.css'
import { faDna, faHeartbeat, faHospitalUser, faNotesMedical, faPills, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Services() {
  return (
    <>
    <div className='services'>
      <div className="container pt-5 ">
      <div className="text-center mt-5">
        <h2 className='fs-1 mainColor border-bottom '>Services</h2>
        <p className='fs-4 py-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="row">
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              <h3 className='mainColor'>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
            </div>
        </div>
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faPills} />
              </div>
              <h3 className='mainColor'>Eosle Commodie</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
            </div>
        </div>
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faHospitalUser} />
              </div>
              <h3 className='mainColor'>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
            </div>
        </div>
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faDna} />
              </div>
              <h3 className='mainColor'>Asperiores Commodit</h3>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
            </div>
        </div>
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faWheelchair} />
              </div>
              <h3 className='mainColor'>Velit Doloremque</h3>
              <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
            </div>
        </div>
        <div className="col-lg-4 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center Service-card">
              <div className="servece-icon">
              <FontAwesomeIcon icon={faNotesMedical}  />
              </div>
              <h3 className='mainColor'>Dolori Architecto</h3>
              <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

