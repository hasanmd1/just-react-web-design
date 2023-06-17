import React from 'react';
import './AboutUs.css';
import { images } from '../../constraints';

const AboutUs = () => {
  return (
    <div className="app__aboutUs app_bg flex__center section__padding" id='aboutUs'>
      <div className="app__aboutUs-overlay flex__center">
        <img src={images.G} alt="g-letter-watermark" />
      </div>
      <div className="app__aboutUs-content flex__center">
        <div className="app__aboutUs-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img'/>
          <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className="app__aboutUs-content_knife flex__center">
          <img src={images.knife} alt="knife"/>  
        </div> 
        <div className="app__aboutUs-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img'/>
          <p className="p__opensans">Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs