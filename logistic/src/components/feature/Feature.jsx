import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className='ship__features-containers__feature'>
      <div className='ship__features-containers__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='ship__features-containers__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature