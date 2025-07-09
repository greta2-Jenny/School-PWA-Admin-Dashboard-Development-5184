import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';

const { FiCheck, FiShield, FiHeart, FiBookOpen, FiUsers, FiHome, FiStar, FiClock } = FiIcons;

const Features = () => {
  const { darkMode } = useTheme();

  const mainFeatures = [
    {
      icon: FiBookOpen,
      title: 'Bible-based curriculum',
      description: 'Every lesson is grounded in Christian values and biblical teachings, helping children develop a strong moral foundation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiHeart,
      title: 'Wholistic Approach',
      description: 'We nurture the whole child - spiritually, emotionally, socially, and academically for complete development.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiStar,
      title: 'Adventurer Club Program',
      description: 'Special extracurricular activities that encourage exploration, creativity, and character building.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: FiHome,
      title: 'Complete Facilities',
      description: 'Modern, well-equipped classrooms and play areas designed specifically for early childhood learning.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiUsers,
      title: 'Small teacher to pupil ratio (2 teachers per class)',
      description: 'Individual attention ensures every child receives the support they need to thrive.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiShield,
      title: 'Comfortable air-conditioned rooms',
      description: 'Climate-controlled environment ensures children are comfortable and focused on learning.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FiShield,
      title: 'Fun and safe environment (gated community)',
      description: 'Secure location in a gated community provides peace of mind for parents.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiClock,
      title: '26 years of quality operation',
      description: 'Decades of experience in early childhood education with a proven track record of success.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const additionalFeatures = [
    'Qualified and experienced teachers',
    'Nutritious meals and snacks provided',
    'Regular health and safety assessments',
    'Parent-teacher communication system',
    'Progress tracking and reporting',
    'Flexible scheduling options',
    'After-school care available',
    'Holiday programs and camps',
    'Music and arts integration',
    'Outdoor play and activities',
    'Field trips and excursions',
    'Character development focus'
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Special Features
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Discover what makes Lil' Hale Learners the perfect choice for your child's early education journey
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What Makes Us Special
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Eight key features that set our school apart and create the perfect learning environment for your child
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Additional Benefits
              </h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Beyond our core features, we offer many additional benefits that enhance your child's 
                learning experience and provide convenience for busy families.
              </p>
              <div className="grid gap-3">
                {additionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=500&fit=crop"
                alt="Happy children learning"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-display font-bold text-xl mb-2">Quality Care</h3>
                  <p className="text-sm">Every detail is designed with your child's wellbeing in mind</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Why Choose Lil' Hale Learners?
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              See how our features compare to what you might expect from other schools
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`overflow-hidden rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left font-display font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Feature
                    </th>
                    <th className={`px-6 py-4 text-center font-display font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Lil' Hale Learners
                    </th>
                    <th className={`px-6 py-4 text-center font-display font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Other Schools
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      Class Size (Teacher:Student Ratio)
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        2:15 (Excellent)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        1:20 (Standard)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      Christian Values Integration
                    </td>
                    <td className="px-6 py-4 text-center">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Varies
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      Years of Experience
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        26 Years
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Varies
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      Gated Community Location
                    </td>
                    <td className="px-6 py-4 text-center">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Rarely
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`px-6 py-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      Air-Conditioned Rooms
                    </td>
                    <td className="px-6 py-4 text-center">
                      <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Sometimes
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-display font-bold text-3xl lg:text-4xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Experience Our Features Firsthand
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Schedule a tour to see how our special features create the perfect learning environment for your child
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
              📅 Schedule a Tour
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              📩 Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;