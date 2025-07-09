import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';

const { FiHeart, FiShield, FiStar, FiUsers, FiBookOpen, FiAward } = FiIcons;

const About = () => {
  const { darkMode } = useTheme();

  const values = [
    {
      icon: FiHeart,
      title: 'Love & Care',
      description: 'Every child is treated with unconditional love and individual attention in a nurturing environment.'
    },
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'Our secure gated community location ensures your child\'s safety while they learn and play.'
    },
    {
      icon: FiBookOpen,
      title: 'Bible-Based Learning',
      description: 'Christian values are woven into every aspect of our curriculum and daily activities.'
    },
    {
      icon: FiUsers,
      title: 'Small Class Sizes',
      description: 'With 2 teachers per class, we ensure personalized attention for every child.'
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: '26 years of proven track record in providing quality early childhood education.'
    },
    {
      icon: FiAward,
      title: 'Holistic Development',
      description: 'We focus on spiritual, emotional, social, and academic growth of every child.'
    }
  ];

  const team = [
    {
      name: 'Mrs. Sarah Johnson',
      role: 'Director & Principal',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      description: 'With over 20 years in early childhood education, Mrs. Johnson leads our school with passion and dedication.'
    },
    {
      name: 'Miss Emily Chen',
      role: 'Head Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Specializing in child development, Miss Chen brings creativity and expertise to our teaching team.'
    },
    {
      name: 'Mrs. Maria Rodriguez',
      role: 'Lead Nursery Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      description: 'A loving and patient teacher who specializes in nurturing the youngest learners in our care.'
    }
  ];

  const milestones = [
    { year: '1998', event: 'Lil\' Hale Learners was founded with a vision to provide Christ-centered education' },
    { year: '2003', event: 'Expanded to include Kindergarten program with state-of-the-art facilities' },
    { year: '2010', event: 'Introduced the Adventurer Club Program for enhanced extracurricular activities' },
    { year: '2015', event: 'Achieved accreditation and recognition for excellence in early childhood education' },
    { year: '2020', event: 'Adapted to modern learning with enhanced safety protocols and technology integration' },
    { year: '2024', event: 'Celebrating 26 years of nurturing young minds and serving our community' }
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
              About Lil' Hale Learners
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              A Christian toddler school dedicated to nurturing young minds through faith, play, and early academic exploration for over 26 years.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Mission
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                To provide a loving, Christ-centered environment where young children can grow spiritually, 
                emotionally, socially, and academically. We believe every child is a precious gift from God 
                and deserves the best foundation for their educational journey.
              </p>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-primary-50'}`}>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                  Our Vision
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-primary-800'}`}>
                  To be the leading Christian early childhood education center, raising confident, 
                  compassionate, and capable children who will make a positive impact in their communities.
                </p>
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
                alt="Children learning together"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-display font-bold text-xl mb-2">26 Years of Excellence</h3>
                  <p className="text-sm">Trusted by families in our community since 1998</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The principles that guide everything we do at Lil' Hale Learners
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dedicated educators who are passionate about nurturing young minds
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                  {member.role}
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Key milestones in our 26-year journey of educational excellence
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-primary text-white font-bold mb-2`}>
                    {milestone.year}
                  </div>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {milestone.event}
                  </p>
                </div>
                <div className="w-4 h-4 bg-gradient-primary rounded-full flex-shrink-0 relative">
                  <div className={`absolute top-4 w-0.5 h-16 bg-gradient-primary ${index === milestones.length - 1 ? 'hidden' : ''}`}></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Christian Values */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <div className="text-6xl mb-6">✝️</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Founded on Faith
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Our Christian foundation shapes every aspect of our school, from curriculum to daily interactions. 
              We believe in nurturing not just the mind, but the heart and soul of every child.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-lg italic">
                "Train up a child in the way he should go, and when he is old he will not depart from it."
              </p>
              <p className="text-sm mt-2 text-white/80">- Proverbs 22:6</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;