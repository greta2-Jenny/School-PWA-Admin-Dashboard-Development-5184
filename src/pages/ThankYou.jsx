import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';

const { FiHome, FiPhone, FiMail, FiCheck } = FiIcons;

const ThankYou = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Thank You Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-soft-rose'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <SafeIcon icon={FiCheck} className="w-12 h-12 text-soft-rose" />
            </div>
          </motion.div>
          
          <motion.h1
            className="font-display font-bold text-4xl lg:text-5xl mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Thank You!
          </motion.h1>
          
          <motion.p
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Your enrollment application has been successfully submitted. We appreciate your interest in Lil' Hale Learners Christian Toddler School.
          </motion.p>
          
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-display font-bold text-2xl mb-4 text-white">What Happens Next?</h2>
            <p className="text-white mb-4">
              Our admissions team will review your application and contact you within 2-3 business days to:
            </p>
            <ul className="text-left space-y-2 mb-4 max-w-md mx-auto">
              <li className="flex items-center">
                <SafeIcon icon={FiCheck} className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                <span className="text-white">Schedule a campus tour and meeting with our staff</span>
              </li>
              <li className="flex items-center">
                <SafeIcon icon={FiCheck} className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                <span className="text-white">Discuss program details and answer any questions</span>
              </li>
              <li className="flex items-center">
                <SafeIcon icon={FiCheck} className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                <span className="text-white">Provide information about the next steps in the enrollment process</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-white text-soft-rose font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <SafeIcon icon={FiHome} className="mr-2 w-5 h-5" />
              Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-soft-rose transition-all duration-300"
            >
              <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className={`font-display font-bold text-3xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Have Questions?
            </motion.h2>
            <motion.p
              className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              If you need any assistance or have questions about your application, please don't hesitate to reach out.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-dusty-blue rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Call Us
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    (555) 123-4567
                  </p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Our office hours are Monday to Friday, 8:00 AM to 5:00 PM.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-soft-rose rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Email Us
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    info@lilhalelearners.com
                  </p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We typically respond to emails within 24 hours during business days.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;