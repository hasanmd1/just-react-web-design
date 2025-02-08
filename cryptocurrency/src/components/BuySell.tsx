import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, DollarSign, Bitcoin } from 'lucide-react';

const BuySell = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'buy' | 'sell'>('buy');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Trade Bitcoin
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Buy and sell Bitcoin instantly
          </p>
        </motion.div>

        <div className="mt-20 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
          >
            <div className="flex justify-center space-x-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setType('buy')}
                className={`px-6 py-2 rounded-md font-medium ${
                  type === 'buy'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                Buy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setType('sell')}
                className={`px-6 py-2 rounded-md font-medium ${
                  type === 'sell'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                Sell
              </motion.button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount (USD)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-gray-500 dark:text-gray-300">USD</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowUpDown className="h-6 w-6 text-gray-400" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  You'll {type === 'buy' ? 'receive' : 'send'}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Bitcoin className="h-5 w-5 text-yellow-500" />
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={amount ? (Number(amount) / 65000).toFixed(8) : '0.00000000'}
                    className="block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-gray-500 dark:text-gray-300">BTC</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  type === 'buy' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {type === 'buy' ? 'Buy Bitcoin' : 'Sell Bitcoin'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuySell;