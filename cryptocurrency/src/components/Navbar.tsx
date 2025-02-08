import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Menu, X, Bitcoin, Sun, Moon} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Buy/Sell', path: '/buy-sell' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Testimonials', path: '/testimonials' }
  ];
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <Bitcoin className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold dark:text-white">BitVault</span>
            </Link>
          </motion.div>
          <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="fixed right-4 top-20 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
              >
                {darkMode ? (
                    <Sun className="h-6 w-6 text-yellow-400" />
                ) : (
                    <Moon className="h-6 w-6 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div key={item.path} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-indigo-500'
                        : 'text-gray-700 hover:text-indigo-500 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-indigo-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;