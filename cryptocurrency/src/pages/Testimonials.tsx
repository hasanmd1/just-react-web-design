import React from 'react';
import Navbar from '../components/Navbar';
import TestimonialsComponent from '../components/Testimonials';
import Footer from '../components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <TestimonialsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;