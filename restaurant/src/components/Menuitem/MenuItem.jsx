import React from 'react';
import './MenuItem.css';

const MenuItem = ({title, price, tag}) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <p className="p__cormorant" style={{color: '#05adf5'}}>{title}</p>
        </div>
        <div className="app__menuItem-dash"/>
        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItem-sub">
        <p className="p__opensans" style={{color: '#5a5a5a'}}>{tag}</p>
      </div>
    </div>
  )
}

export default MenuItem