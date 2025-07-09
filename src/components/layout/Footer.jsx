import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';

const { FiHeart, FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiArrowUp } = FiIcons;

const Footer = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const settings = data.settings;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/enrollment', label: 'Enrollment' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const programs = [
    'Childcare Program',
    'Toddler Program',
    'Nursery 1',
    'Nursery 2',
    'Kindergarten',
    'Tutorial Classes'
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {settings.siteName}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Christian Toddler School
                </p>
              </div>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {settings.tagline}
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={settings.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:shadow-lg transition-all duration-200`}
              >
                <SafeIcon icon={FiFacebook} className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={settings.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:shadow-lg transition-all duration-200`}
              >
                <SafeIcon icon={FiInstagram} className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={settings.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:shadow-lg transition-all duration-200`}
              >
                <SafeIcon icon={FiTwitter} className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-display font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className={`font-display font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Programs
            </h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`font-display font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {settings.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {settings.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {settings.contactEmail}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Made with
              </span>
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                for our little learners
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 {settings.siteName}. All rights reserved.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className={`w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:shadow-lg transition-all duration-200`}
              >
                <SafeIcon icon={FiArrowUp} className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Christian Message */}
          <div className="mt-4 text-center">
            <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              "Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;