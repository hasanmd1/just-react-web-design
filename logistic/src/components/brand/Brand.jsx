import React from 'react';

import './brand.css';
import { amazon, alibaba, dhl, ebay, shopify } from './imports';

const Brand = () => {
  return (
    <div className='ship__brand section__padding'>
      <div className='ship__brand-image'>
        <img src={amazon} alt='amazon' />
      </div>
      <div className='ship__brand-image'>
        <img src={alibaba} alt='alibaba' />
      </div>
      <div className='ship__brand-image'>
        <img src={dhl} alt='DHL' />
      </div>
      <div className='ship__brand-image'>
        <img src={ebay} alt='ebay' />
      </div>
      <div className='ship__brand-image'>
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand