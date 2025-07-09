import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';

const { FiSun, FiMoon } = FiIcons;

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`fixed top-20 right-4 z-40 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
        darkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <SafeIcon 
        icon={darkMode ? FiSun : FiMoon} 
        className="w-5 h-5" 
      />
    </motion.button>
  );
};

export default DarkModeToggle;