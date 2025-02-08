import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Testimonials from './components/Testimonials';
import BuySell from './components/BuySell';
import Pricing from './components/Pricing';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Navbar />

            <main>
                <Hero />
                <Features />
                <Analytics />
                <BuySell />
                <Testimonials />
                <Pricing />
                <GetInTouch />
            </main>

            <Footer />
        </div>
    </>
  );
}

export default App;