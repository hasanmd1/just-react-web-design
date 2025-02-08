import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Footer from '../components/Footer';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;