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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`fixed bottom-24 right-6 z-40 w-14 h-14 rounded-xl shadow-clean transition-all duration-300 flex items-center justify-center ${
        darkMode 
          ? 'bg-warm-blush text-muted-purple hover:bg-warm-blush-light' 
          : 'bg-dusty-blue text-white hover:bg-dusty-blue-light'
      }`}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-6 h-6" />
    </motion.button>
  );
};

export default DarkModeToggle;