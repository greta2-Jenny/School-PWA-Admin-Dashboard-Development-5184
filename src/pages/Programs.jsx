import React,{useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useTheme} from '../contexts/ThemeContext';
import {useData} from '../contexts/DataContext';

const {FiUsers,FiClock,FiDollarSign,FiCheck,FiFilter}=FiIcons;

const Programs=()=> {
  const {darkMode}=useTheme();
  const {data}=useData();
  const [selectedAge,setSelectedAge]=useState('all');

  const ageGroups=[
    {value: 'all',label: 'All Ages'},
    {value: '2',label: '2 Years'},
    {value: '3',label: '3 Years'},
    {value: '4',label: '4 Years'},
    {value: '5',label: '5 Years'},
    {value: 'all-ages',label: 'All Ages'}
  ];

  const filteredCourses=selectedAge==='all' 
    ? data.courses 
    : data.courses.filter(course=> 
        course.ageGroup.includes(selectedAge) || 
        (selectedAge==='all-ages' && course.ageGroup==='All ages')
      );

  const programBenefits=[
    'Qualified and caring teachers',
    'Small class sizes for individual attention',
    'Safe and secure environment',
    'Nutritious meals and snacks',
    'Age-appropriate curriculum',
    'Regular progress assessments',
    'Parent-teacher communication',
    'Extracurricular activities'
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Changed to solid Muted Purple */}
      <section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-muted-purple'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
            >
              Our Programs
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
              transition={{delay: 0.2}}
            >
              Age-appropriate programs designed to nurture every child's unique potential and prepare them for future success
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <SafeIcon 
                icon={FiFilter} 
                className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} 
              />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter by Age:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map((age)=> (
                <button
                  key={age.value}
                  onClick={()=> setSelectedAge(age.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedAge===age.value 
                      ? 'bg-soft-rose text-white shadow-lg' 
                      : darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course,index)=> (
              <motion.div
                key={course.id}
                initial={{opacity: 0,y: 20}}
                whileInView={{opacity: 1,y: 0}}
                transition={{delay: index * 0.1}}
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
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature,i)=> (
                        <li key={i} className="flex items-center space-x-2 text-sm">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiDollarSign} className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {course.price}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-soft-rose text-white rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits - Changed to solid Dusty Blue */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-dusty-blue'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0,x: -50}}
              whileInView={{opacity: 1,x: 0}}
              transition={{duration: 0.8}}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-white'}`}>
                Why Choose Our Programs?
              </h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                Every program at Lil' Hale Learners is designed with your child's development in mind. We combine Christian values with modern educational approaches to create a nurturing environment where children can thrive.
              </p>
              <div className="grid gap-3">
                {programBenefits.map((benefit,index)=> (
                  <motion.div
                    key={index}
                    initial={{opacity: 0,x: -20}}
                    whileInView={{opacity: 1,x: 0}}
                    transition={{delay: index * 0.1}}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-white'}`}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0,x: 50}}
              whileInView={{opacity: 1,x: 0}}
              transition={{duration: 0.8,delay: 0.2}}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=600&h=500&fit=crop" 
                alt="Children enjoying activities" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-display font-bold text-xl mb-2">Small Class Sizes</h3>
                  <p className="text-sm">2 teachers per class ensure individual attention for every child</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
            >
              Program Schedule
            </motion.h2>
            <motion.p 
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
              transition={{delay: 0.2}}
            >
              Flexible scheduling options to fit your family's needs
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
              className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`font-display font-bold text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Half Day Programs
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Morning Session</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Afternoon Session</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>1:00 PM - 5:00 PM</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
              transition={{delay: 0.1}}
              className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`font-display font-bold text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Full Day Programs
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Monday - Friday</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Extended Care</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Available</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
              transition={{delay: 0.2}}
              className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`font-display font-bold text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Tutorial Classes
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Flexible Hours</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Individual Sessions</span>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>1-on-1 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Changed to solid Soft Rose */}
      <section className={`py-20 ${darkMode ? 'bg-gray-700' : 'solid-bg-soft-rose'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-display font-bold text-3xl lg:text-4xl text-white mb-6"
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
          >
            Ready to Enroll Your Child?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            transition={{delay: 0.2}}
          >
            Choose the program that's right for your child and give them the foundation they need to succeed
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            transition={{delay: 0.4}}
          >
            <button className="px-8 py-4 bg-white text-soft-rose font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
              📩 Enroll Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-soft-rose transition-all duration-300 hover:shadow-lg hover:scale-105">
              📅 Schedule a Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;