import React from 'react';
import Navbar from '../components/Navbar';
import BuySellComponent from '../components/BuySell';
import Footer from '../components/Footer';

const BuySell = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <BuySellComponent />
      </div>
      <Footer />
    </div>
  );
};

export default BuySell;