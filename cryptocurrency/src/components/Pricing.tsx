import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      features: ['Basic Trading', 'Market Analysis', 'Email Support', 'Mobile App Access']
    },
    {
      name: 'Pro',
      price: '29',
      features: ['Advanced Trading', 'Real-time Analytics', '24/7 Support', 'API Access', 'Custom Reports']
    },
    {
      name: 'Enterprise',
      price: '99',
      features: ['Unlimited Trading', 'Dedicated Manager', 'Custom Solutions', 'Priority Support', 'White Label Options']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-3 px-6 border border-transparent rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;