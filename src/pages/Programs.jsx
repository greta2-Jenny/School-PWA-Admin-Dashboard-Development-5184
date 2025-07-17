import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useTheme} from '../contexts/ThemeContext';

const {FiCheck, FiStar} = FiIcons;

const Programs = () => {
  const {darkMode} = useTheme();

  // Define courseBenefits array
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
      {/* Course Benefits */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Our Programs?
              </h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Every course at Lil' Hale Learners is designed with your child's holistic development in mind. We combine Christian values with modern educational approaches to create a nurturing environment where children can thrive.
              </p>
              <div className="grid gap-3">
                {courseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: index * 0.1}}
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
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="relative"
            >
              {/* Updated image source with a direct, reliable URL */}
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=500&fit=crop"
                alt="Children learning together"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                onError={(e) => {
                  console.error('Programs image failed to load');
                  e.target.src = 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
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
    </div>
  );
};

export default Programs;