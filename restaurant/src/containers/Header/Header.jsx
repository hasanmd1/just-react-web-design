import React from 'react';
import './Header.css';

import {images} from '../../constraints';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Chase the new flavour'/>
        <h1 className="app__header-h1">The key to fine dining</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        <button type='btn' className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img app__header-image">
        <img src={images.welcome} alt="welcome"/>
      </div>
    </div>
  )
}

export default Header