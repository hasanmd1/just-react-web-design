import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center">
              <Bitcoin className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">BitVault</span>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Securing the future of digital assets
            </p>
          </motion.div>
          
          {[
            {
              title: 'Product',
              links: ['Features', 'Security', 'Team', 'Enterprise']
            },
            {
              title: 'Support',
              links: ['Documentation', 'Guides', 'API Status', 'Contact']
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Jobs', 'Press']
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-1"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            © 2025 BitVault. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[Twitter, Github, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-gray-500"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;