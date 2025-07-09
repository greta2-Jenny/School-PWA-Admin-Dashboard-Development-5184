import React, { useState } from 'react';
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
  const [logoError, setLogoError] = useState(false);

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
    <footer className={`${darkMode ? 'bg-gray-900' : 'solid-bg-muted-purple'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                {!logoError ? (
                  <img
                    src="https://drive.google.com/uc?export=view&id=1W6X84fwnJCs5_BiuCy0jipwHP_J7n-XR"
                    alt="Lil' Hale Learners Logo"
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      console.error('Footer logo failed to load:', e);
                      setLogoError(true);
                    }}
                  />
                ) : (
                  // Fallback to text-based logo only if the image fails
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-muted-purple font-bold text-2xl">L</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  {settings.siteName}
                </h3>
                <p className="text-sm font-body font-medium text-soft-rose">
                  Christian Toddler School
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed font-body text-white">
              {settings.tagline}
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={settings.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-muted-purple hover:bg-gray-100 transition-all duration-300"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={settings.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-muted-purple hover:bg-gray-100 transition-all duration-300"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={settings.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-muted-purple hover:bg-gray-100 transition-all duration-300"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base font-body font-medium text-white hover:text-soft-rose transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-base font-body font-medium text-white">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mt-1 text-soft-rose" />
                <span className="text-base font-body font-medium text-white">
                  {settings.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-soft-rose" />
                <span className="text-base font-body font-medium text-white">
                  {settings.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-soft-rose" />
                <span className="text-base font-body font-medium text-white">
                  {settings.contactEmail}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 text-base font-body font-medium text-white">
              <span>Made with</span>
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-soft-rose" />
              <span>for our little learners</span>
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-base font-body font-medium text-white">
                © 2024 {settings.siteName}. All rights reserved.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-muted-purple hover:bg-gray-100 transition-all duration-300"
              >
                <SafeIcon icon={FiArrowUp} className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Christian Message */}
          <div className="mt-8 text-center">
            <p className="text-lg italic font-body font-medium text-white">
              "Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;