import React from 'react';
import './footer.css';
import logo from '../../assets/Logo_.png';

const Footer = () => {
  return (
    <div className='ship__footer section__padding'>
      <div className="ship__footer-heading">
        <h1 className="gradient__text">Do you want to ship ahead from others?</h1>
      </div>
      <div className="ship__footer-btn">
        <p>Access our online platform to get started</p>
      </div>

      <div className="ship__footer-links">
        <div className="ship__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>45/A, HongGuang Avenue, Ban'an, Chongqing, China 410000</p>
          <br></br>
          <p>All right Reserved.</p>
        </div>
        <div className="ship__footer-links_div">
          <h4>Social Media</h4>
          <p>Contact Us</p>
          <p>Career</p>
        </div>
        <div className="ship__footer-links_div">

          <h4>Shipping</h4>
          <p>Dispute resolution</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Partner With Us</p>
        </div>
      </div>

      <div className="ship__footer-copyright">
        <p>© 2023. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer