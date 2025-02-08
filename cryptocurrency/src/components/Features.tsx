import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Globe, Cpu, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Military-grade encryption protecting your assets 24/7'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Trade from anywhere in the world, anytime'
    },
    {
      icon: Cpu,
      title: 'Smart Contracts',
      description: 'Automated, trustless transactions powered by blockchain'
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Markets never sleep, neither do we'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose BitVault?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Experience the next generation of cryptocurrency trading
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <div>
                  <feature.icon className="h-8 w-8 text-yellow-500" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;