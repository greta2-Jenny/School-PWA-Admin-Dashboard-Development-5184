import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';

const { FiUsers, FiClock, FiDollarSign, FiCheck, FiFilter, FiBookOpen, FiStar } = FiIcons;

const Courses = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '2', label: '2 Years' },
    { value: '3', label: '3 Years' },
    { value: '4', label: '4 Years' },
    { value: '5', label: '5 Years' },
    { value: 'all-ages', label: 'All Ages' }
  ];

  const courseTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' },
    { value: 'tutorial', label: 'Tutorial' }
  ];

  const filteredCourses = data.courses.filter(course => {
    const matchesAge = selectedAge === 'all' || 
                      course.ageGroup.includes(selectedAge) || 
                      (selectedAge === 'all-ages' && course.ageGroup === 'All ages');
    
    const matchesType = selectedType === 'all' || 
                       (selectedType === 'full-time' && course.duration.includes('Full')) ||
                       (selectedType === 'part-time' && course.duration.includes('Half')) ||
                       (selectedType === 'tutorial' && course.title.includes('Tutorial'));
    
    return matchesAge && matchesType;
  });

  const courseBenefits = [
    'Qualified and experienced teachers',
    'Small class sizes for personalized attention',
    'Safe and secure learning environment',
    'Nutritious meals and snacks provided',
    'Age-appropriate curriculum and activities',
    'Regular progress assessments and reports',
    'Parent-teacher communication and updates',
    'Extracurricular activities and field trips'
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
              Our Courses
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive educational programs designed to nurture your child's growth and development
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter by:
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                    : 'bg-white text-gray-700 border border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                {ageGroups.map((age) => (
                  <option key={age.value} value={age.value}>{age.label}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                    : 'bg-white text-gray-700 border border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                {courseTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                      {course.ageGroup}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {course.title}
                  </h3>

                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {course.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`font-semibold text-sm mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Course Features:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                      {course.features.length > 3 && (
                        <li className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          +{course.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiDollarSign} className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {course.price}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <SafeIcon icon={FiBookOpen} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                No courses found
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Course Benefits */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Our Courses?
              </h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Every course at Lil' Hale Learners is designed with your child's holistic development in mind. We combine Christian values with modern educational approaches to create a nurturing environment where children can thrive.
              </p>
              <div className="grid gap-3">
                {courseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {benefit}
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
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=500&fit=crop"
                alt="Children learning together"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-display font-bold text-xl">Quality Education</h3>
                  </div>
                  <p className="text-sm">26 years of proven excellence in early childhood education</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Course Statistics
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Numbers that speak to our commitment to excellence
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '6', label: 'Course Programs', icon: FiBookOpen },
              { number: '500+', label: 'Students Enrolled', icon: FiUsers },
              { number: '26', label: 'Years of Experience', icon: FiStar },
              { number: '2:15', label: 'Teacher-Student Ratio', icon: FiUsers }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready to Enroll Your Child?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Choose the course that's right for your child and give them the foundation they need to succeed
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
              📩 Enroll Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              📅 Schedule a Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;