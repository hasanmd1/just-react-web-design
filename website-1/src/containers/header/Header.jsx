import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ship from '../../assets/ship.png';

const Header = () => {
  return (
    <div className='ship__header section__padding' id='home'>
      <div className='ship__header-content'>
        <h1 className='gradient__text'>Do you want to ship any amount of product anywhere fast? Get in touch with our team.</h1>
        <p>Our team will reach out to you via email.</p>
        <div className='ship__header-content__input'>
          <input type='email' placeholder='Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='ship__header-content__people'>
          <img src={people} alt='people'/>
          <p>10000+ people shipped with us.</p>
        </div>
      </div>
      <div className='ship__header-image'>
          <img src={ship} alt='ship' />
        </div>
    </div>
  )
}

export default Header