import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constraints';

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id='menu'>
      <div className="app__specialMenu-title">
        <SubHeading title='Menu That Fits Your Palatte'/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex-center">
          <p className="app__specialMenu-menu_heading">Most Popular</p>
          <div className="app__specialMenu-menu_items">
            {data.Food.map((food, index) => (
              <MenuItem key={food.title + index} title={food.title} price={food.price} tag={food.tag} />
            ))}
          </div>
        </div>
        <div class="app__specialMenu-menu_img">
          <img src={images.menu} alt="picture" />
        </div>
        <div className="app__specialMenu-menu_cocktail flex-center">
          <p className="app__specialMenu-menu_heading">Coffee</p>
          <div className="app__specialMenu-menu_items">
            {data.coffee.map((coffee, index) => (
              <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price} tag={coffee.tag} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '1rem'}}>
        <button type='btn' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu