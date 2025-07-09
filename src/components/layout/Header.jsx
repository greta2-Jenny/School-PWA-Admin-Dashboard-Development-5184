import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';

const { FiMenu, FiX, FiHome, FiInfo, FiBookOpen, FiUserPlus, FiPhone } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/about', label: 'About', icon: FiInfo },
    { path: '/programs', label: 'Programs', icon: FiBookOpen },
    { path: '/enrollment', label: 'Enrollment', icon: FiUserPlus },
    { path: '/contact', label: 'Contact', icon: FiPhone }
  ];

  const isActive = (path) => location.pathname === path;

  // Use the custom logo as primary option
  const logoOptions = [
    "/custom-logo.png",
    "/logo.png",
    "/lamb-logo.svg",
    "/logo-icon.svg",
    "/favicon.svg"
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900 border-b border-gray-700' 
          : 'solid-bg-muted-purple border-b border-muted-purple-light'
      } shadow-clean`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {!logoError ? (
                  <img 
                    src={logoOptions[0]} 
                    alt="Lil' Hale Learners Logo" 
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      console.error('Logo failed to load:', e);
                      // Try the next logo option
                      e.target.src = logoOptions[1];
                      // If all fail, set error to true
                      e.target.onerror = () => {
                        e.target.src = logoOptions[2];
                        e.target.onerror = () => {
                          e.target.src = logoOptions[3];
                          e.target.onerror = () => {
                            e.target.src = logoOptions[4];
                            e.target.onerror = () => setLogoError(true);
                          };
                        };
                      };
                    }}
                  />
                ) : (
                  // Fallback to text-based logo
                  <div className="w-10 h-10 bg-muted-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="font-display font-bold text-xl text-white leading-tight">
                  Lil' Hale Learners
                </h1>
                <p className="text-sm font-body font-medium text-warm-blush leading-tight">
                  Christian Toddler School
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 text-base font-display font-semibold transition-all duration-300 flex items-center space-x-2 rounded-lg ${
                  isActive(item.path)
                    ? 'text-white bg-soft-rose shadow-clean'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-white hover:text-warm-blush hover:bg-muted-purple-light'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                : 'text-warm-blush hover:text-white hover:bg-muted-purple-light'
            }`}
            aria-label="Toggle menu"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 rounded-lg text-base font-display font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  isActive(item.path)
                    ? 'bg-soft-rose text-white shadow-clean'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-white hover:text-warm-blush hover:bg-muted-purple-light'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;