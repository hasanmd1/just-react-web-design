import React from 'react';
import './aboutUs.css';
import Feature from '../../components/feature/Feature';

const AboutUs = () => {
  return (
    <div className='ship__aboutUs section__margin' id='aboutUs'>
      <div className='ship__aboutUs-feature'>
        <Feature title='Our journey' text='About 4 years ago we have started our journey to ensure fast and easy shipping. We ensure the best possible shipping experience for everyone.'/>
      </div>
      <div className='ship__aboutUs-heading'>
        <h1 className='gradient__text'>Do you have parcel ready to be shipped?</h1>
        <p>Explore Our Shipping Options</p>
      </div>
      <div className='ship__aboutUs-containers'>
        <Feature title='Shipping booking' text='Reserve a pick-up time ahead of schedule.'/>
        <Feature title='Knowledgebase' text='All journals and shipping rules and regualtions.'/>
        <Feature title='Education' text='Training with Us to become Customs Agent.'/>
      </div>
    </div>
  )
}

export default AboutUs