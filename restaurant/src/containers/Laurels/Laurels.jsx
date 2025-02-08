import React from 'react';

import {data, images} from '../../constraints';
import './Laurels.css';
import { SubHeading } from '../../components';


const AwardCard = ({awards: {imgUrl, title, subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_award-card_content">
      <p className="p__cormorant" style={{color: '#05adf5'}}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title='Awards & Recognition'/>
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => <AwardCard awards={award} key={award.title} />)}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  )
}

export default Laurels