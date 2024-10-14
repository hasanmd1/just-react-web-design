import React from 'react';

import './possibility.css';
import possibilityImage from '../../assets/possibility1.png';

const Possibility = () => {
  return (
    <div className='ship__possibility section__padding' id='possibility'>
      <div className='ship__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='ship__possibility-content'>
        <h4>Request Early Booking/Calculate Shipping</h4>
        <h1 className='gradient__text'>The early parcel booking possibility</h1>
        <p>Yes, you can book for a parcel in advance and we will collect from your address.</p>
        <h4>Access our online platform to get started</h4>
      </div>
    </div>
  );
}

export default Possibility;