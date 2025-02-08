import React from 'react';
import Navbar from '../components/Navbar';
import AnalyticsComponent from '../components/Analytics';
import Footer from '../components/Footer';

const Analytics = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="pt-16">
                <AnalyticsComponent />
            </div>
            <Footer />
        </div>
    </>
  );
};

export default Analytics;