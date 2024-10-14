import React from 'react';

import {Article, Brand, CTA, Feature, Navbar} from './components';
import {Features, AboutUs, Blog, Footer, Header, Possibility} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <AboutUs/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App