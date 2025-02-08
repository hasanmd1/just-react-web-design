import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, PieChart, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  const stats = [
    { title: 'Daily Volume', value: '$2.4B', icon: TrendingUp },
    { title: 'Active Users', value: '1.2M', icon: BarChart2 },
    { title: 'Market Share', value: '23%', icon: PieChart },
    { title: 'Growth Rate', value: '+127%', icon: Activity }
  ];

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
            Real-Time Analytics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Track your investments with precision
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-500 dark:text-gray-300">
                {stat.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
        >
          <div className="h-96 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">
              <img src="https://cdn.dribbble.com/userupload/15534575/file/original-c1a2696dbef791490d73b1aef026ed70.png?crop=0x0-3201x2401&format=webp&resize=400x300&vertical=center" alt="Analytics" className="min-h-full min-w-full object-contain" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;