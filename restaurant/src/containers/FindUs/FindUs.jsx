import React from 'react'

import {SubHeading} from '../../components';
import { images } from '../../constraints';

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app_wrapper_info">
        <SubHeading title='Contact'/>
        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-container">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{margin: '2rem 0', fontSize: '32px', color: '#05adf5'}}>Opening Hours:</p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button type='btn' className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUsImage" />
      </div>
    </div>
  )
}

export default FindUs