import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    { 
        title: 'Easy Shipping With Click of a button',
        text: 'We make shipping easy for you. You can ship With click of a button',
    },
    { 
        title: 'Fastest Shipping',
        text: 'We ship to destination fast for you. You will be able to receive it in your local address',
    },
    { 
        title: 'Always Customer First',
        text: 'We try to ensure best possible customer support with 24/7 hotline.',
    },
    { 
        title: 'MoneyBack Guarantee on Damaged Product',
        text: 'If any product is damaged while shipping, we ensure 100% moneyback guarantee',
    },
];

const Features = () => {
  return (
    <div className='ship__features section__padding' id='features'>
        <div className='ship__features-heading'>
            <h1 className='gradient__text'>Why Ship with Us?</h1>
            <p>Request Cost Estimation</p>
        </div>
        <div className='ship__features-containers'>
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} keys={item.title + index} />
            ))}
        </div>
    </div>
  )
}

export default Features;