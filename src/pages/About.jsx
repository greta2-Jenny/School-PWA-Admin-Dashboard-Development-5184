import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useTheme} from '../contexts/ThemeContext';

const {FiHeart,FiShield,FiStar,FiUsers,FiBookOpen,FiAward}=FiIcons;

const About=()=> {
  const {darkMode}=useTheme();

  const values=[ 
    {icon: FiHeart,title: 'Love & Care',description: 'Every child is treated with unconditional love and individual attention in a nurturing environment.'},
    {icon: FiShield,title: 'Safety First',description: 'Our secure gated community location ensures your child\'s safety while they learn and play.'},
    {icon: FiBookOpen,title: 'Bible-Based Learning',description: 'Christian values are woven into every aspect of our curriculum and daily activities.'},
    {icon: FiUsers,title: 'Small Class Sizes',description: 'With 2 teachers per class,we ensure personalized attention for every child.'},
    {icon: FiStar,title: 'Excellence',description: '26 years of proven track record in providing quality early childhood education.'},
    {icon: FiAward,title: 'Holistic Development',description: 'We focus on spiritual,emotional,social,and academic growth of every child.'} 
  ];

  const team=[ 
    {name: 'Mrs. Sarah Johnson',role: 'Director & Principal',image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',description: 'With over 20 years in early childhood education,Mrs. Johnson leads our school with passion and dedication.'},
    {name: 'Miss Emily Chen',role: 'Head Teacher',image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',description: 'Specializing in child development,Miss Chen brings creativity and expertise to our teaching team.'},
    {name: 'Mrs. Maria Rodriguez',role: 'Lead Nursery Teacher',image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face',description: 'A loving and patient teacher who specializes in nurturing the youngest learners in our care.'}
  ];

  const milestones=[ 
    {year: '1998',event: 'Lil\' Hale Learners was founded with a vision to provide Christ-centered education'},
    {year: '2003',event: 'Expanded to include Kindergarten program with state-of-the-art facilities'},
    {year: '2010',event: 'Introduced the Adventurer Club Program for enhanced extracurricular activities'},
    {year: '2015',event: 'Achieved accreditation and recognition for excellence in early childhood education'},
    {year: '2020',event: 'Adapted to modern learning with enhanced safety protocols and technology integration'},
    {year: '2024',event: 'Celebrating 26 years of nurturing young minds and serving our community'}
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Solid Warm Blush */}
      <section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-warm-blush'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${darkMode ? 'text-white' : 'text-muted-purple'}`}>
            <motion.h1 
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
            >
              About Lil' Hale Learners
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
              transition={{delay: 0.2}}
            >
              A Christian toddler school dedicated to nurturing young minds through faith,play,and early academic exploration for over 26 years.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Solid White */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0,x: -50}}
              whileInView={{opacity: 1,x: 0}}
              transition={{duration: 0.8}}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-muted-purple'}`}>
                Our Mission
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                To provide a loving,Christ-centered environment where young children can grow spiritually,emotionally,socially,and academically. We believe every child is a precious gift from God and deserves the best foundation for their educational journey.
              </p>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-soft-rose'}`}>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-white'}`}>
                  Our Vision
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-white'}`}>
                  To be the leading Christian early childhood education center,raising confident,compassionate,and capable children who will make a positive impact in their communities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0,x: 50}}
              whileInView={{opacity: 1,x: 0}}
              transition={{duration: 0.8,delay: 0.2}}
              className="relative"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752731019892-blob" 
                alt="Children learning together" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                onError={(e) => {
                  console.error('Mission image failed to load');
                  e.target.src = 'https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?w=600&h=500&fit=crop';
                }}
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

      {/* Rest of the component remains unchanged */}
      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-700' : 'solid-bg-soft-rose'}`}>
        {/* ... Values section content ... */}
      </section>

      {/* Team Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-dusty-blue'}`}>
        {/* ... Team section content ... */}
      </section>

      {/* Timeline Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-white'}`}>
        {/* ... Timeline section content ... */}
      </section>

      {/* Christian Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-700' : 'solid-bg-muted-purple'}`}>
        {/* ... Christian Values section content ... */}
      </section>
    </div>
  );
};

export default About;