import React from 'react';
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constraints';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;
    if(direction === 'left') {
      current -= 300;
    }
    else {
      current += 300;
    }
  };
  return (
    <div className="app__gallery app__bg flex__center section__padding">
      <div className="app__gallery-content">
        <SubHeading title='Instagram'/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button type='btn' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_containers">
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card" key={`gallery__image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className='gallery__images-icon'/>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery