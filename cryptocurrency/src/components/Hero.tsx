import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">The Future of</span>
              <span className="block text-yellow-500">Cryptocurrency</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              BitVault is revolutionizing the way we think about digital assets. 
              Secure, fast, and built for the future.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80"
                alt="Cryptocurrency visualization"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {[
            { icon: TrendingUp, title: 'Market Leading', desc: 'Top performing cryptocurrency' },
            { icon: Shield, title: 'Secure', desc: 'Advanced encryption protocols' },
            { icon: Zap, title: 'Lightning Fast', desc: 'Instant transactions' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <feature.icon className="h-8 w-8 text-yellow-500" />
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;