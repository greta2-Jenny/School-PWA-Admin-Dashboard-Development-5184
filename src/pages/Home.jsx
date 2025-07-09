import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';

const { FiArrowRight, FiCheck, FiHeart, FiShield, FiStar, FiUsers, FiBookOpen, FiCalendar, FiDownload, FiMessageCircle, FiHome, FiClock, FiTarget, FiAward } = FiIcons;

const Home = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const settings = data.settings;

  const stats = [
    { icon: FiUsers, label: 'Happy Families', value: '500+' },
    { icon: FiBookOpen, label: 'Programs', value: '6' },
    { icon: FiStar, label: 'Years of Excellence', value: '26' },
    { icon: FiHeart, label: 'Dedicated Teachers', value: '20+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'My daughter Emma loves going to school every day. The teachers are so caring and the Christian values they teach are wonderful.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      content: 'The small class sizes and individual attention have helped my son develop confidence and social skills. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Parent',
      content: 'Lil\' Hale Learners has been a blessing to our family. The curriculum is excellent and the environment is so nurturing.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  ];

  // Gallery images for the homepage
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop', title: 'Classroom Activities' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop', title: 'Story Time' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', title: 'Outdoor Play' },
    { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop', title: 'Art Projects' },
    { src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop', title: 'Learning Together' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop', title: 'Reading Corner' }
  ];

  // Special features for "What Makes Us Special" section
  const specialFeatures = [
    {
      icon: FiBookOpen,
      title: 'Bible-based curriculum',
      description: 'Every lesson is grounded in Christian values and biblical teachings, helping children develop a strong moral foundation.',
      iconColor: 'bg-white'
    },
    {
      icon: FiHeart,
      title: 'Wholistic Approach',
      description: 'We nurture the whole child - spiritually, emotionally, socially, and academically for complete development.',
      iconColor: 'bg-white'
    },
    {
      icon: FiStar,
      title: 'Adventurer Club Program',
      description: 'Special extracurricular activities that encourage exploration, creativity, and character building.',
      iconColor: 'bg-white'
    },
    {
      icon: FiHome,
      title: 'Complete Facilities',
      description: 'Modern, well-equipped classrooms and play areas designed specifically for early childhood learning.',
      iconColor: 'bg-white'
    },
    {
      icon: FiUsers,
      title: 'Small teacher to pupil ratio (2 teachers per class)',
      description: 'Individual attention ensures every child receives the support they need to thrive.',
      iconColor: 'bg-white'
    },
    {
      icon: FiShield,
      title: 'Comfortable air-conditioned rooms',
      description: 'Climate-controlled environment ensures children are comfortable and focused on learning.',
      iconColor: 'bg-white'
    },
    {
      icon: FiShield,
      title: 'Fun and safe environment (gated community)',
      description: 'Secure location in a gated community provides peace of mind for parents.',
      iconColor: 'bg-white'
    },
    {
      icon: FiClock,
      title: '26 years of quality operation',
      description: 'Decades of experience in early childhood education with a proven track record of success.',
      iconColor: 'bg-white'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Solid Warm Blush */}
      <section className={`section-spacing-lg ${darkMode ? 'bg-gray-800' : 'solid-bg-warm-blush'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'text-white' : 'text-muted-purple'}`}
            >
              <motion.h1
                className="font-display font-bold text-5xl lg:text-6xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Nurturing Young Minds Through Faith
              </motion.h1>
              <motion.p
                className={`text-xl lg:text-2xl mb-12 font-body font-medium leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-muted-purple'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {settings.tagline}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/enrollment"
                  className="inline-flex items-center px-8 py-4 bg-dusty-blue text-white font-display font-bold text-lg rounded-xl hover:bg-dusty-blue-light hover:scale-105 transition-all duration-300 shadow-clean"
                >
                  Enroll Now
                  <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-soft-rose text-white font-display font-bold text-lg rounded-xl hover:bg-soft-rose-light hover:scale-105 transition-all duration-300 shadow-clean"
                >
                  Book a Tour
                  <SafeIcon icon={FiCalendar} className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop"
                  alt="Happy children learning"
                  className="rounded-2xl shadow-clean-xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-muted-purple rounded-2xl shadow-clean flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-white">26</div>
                    <div className="text-sm font-body font-semibold text-white">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Solid Dusty Blue */}
      <section className={`section-spacing ${darkMode ? 'bg-gray-800' : 'solid-bg-dusty-blue'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="stats-card"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-clean">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-dusty-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-display font-bold mb-3 text-white">
                  {stat.value}
                </div>
                <div className="text-lg font-body font-medium text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview - Solid Dusty Blue */}
      <section className={`section-spacing-lg ${darkMode ? 'bg-gray-700' : 'solid-bg-dusty-blue'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <motion.h2
              className="font-display font-bold text-4xl lg:text-5xl mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our Programs
            </motion.h2>
            <motion.p
              className="text-xl font-body font-medium text-white max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Age-appropriate programs designed to nurture every child's unique potential
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.courses.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-clean hover:shadow-clean-lg transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-soft-rose text-white px-3 py-1 rounded-full text-sm font-display font-semibold">
                      {course.ageGroup}
                    </span>
                    <span className="text-sm font-body font-medium text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-muted-purple">
                    {course.title}
                  </h3>
                  <p className="text-base font-body font-medium mb-6 leading-relaxed text-gray-600">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-display font-bold text-soft-rose">
                      {course.price}
                    </span>
                    <Link
                      to="/programs"
                      className="text-dusty-blue hover:text-soft-rose font-display font-bold text-sm flex items-center transition-colors duration-200"
                    >
                      Learn More
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 bg-white text-dusty-blue font-display font-bold text-lg rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-clean"
            >
              View All Programs
              <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section - Solid Soft Rose */}
      <section className={`section-spacing-lg ${darkMode ? 'bg-gray-800' : 'solid-bg-soft-rose'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <motion.h2
              className="font-display font-bold text-4xl lg:text-5xl mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What Makes Us Special
            </motion.h2>
            <motion.p
              className="text-xl font-body font-medium text-white max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Eight key features that set our school apart and create the perfect learning environment for your child
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-clean hover:shadow-clean-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-xl bg-soft-rose flex items-center justify-center flex-shrink-0 shadow-clean">
                    <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-3 text-muted-purple">
                      {feature.title}
                    </h3>
                    <p className="text-base font-body font-medium leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Solid White */}
      <section className={`section-spacing-lg ${darkMode ? 'bg-gray-900' : 'solid-bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-4xl lg:text-5xl mb-6 ${darkMode ? 'text-white' : 'text-muted-purple'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Life at Our School
            </motion.h2>
            <motion.p
              className={`text-xl font-body font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Glimpses of joy, learning, and growth at Lil' Hale Learners
            </motion.p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="gallery-item border-2 border-soft-rose"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-soft-rose bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="font-display font-bold text-lg text-white">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 bg-soft-rose text-white font-display font-bold text-lg rounded-xl hover:bg-soft-rose-light hover:scale-105 transition-all duration-300 shadow-clean"
            >
              View More Photos
              <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Section - Solid Warm Blush */}
      <section className={`section-spacing-lg ${darkMode ? 'bg-gray-800' : 'solid-bg-warm-blush'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-4xl lg:text-5xl mb-6 ${darkMode ? 'text-white' : 'text-muted-purple'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What Parents Say
            </motion.h2>
            <motion.p
              className={`text-xl font-body font-medium ${darkMode ? 'text-gray-300' : 'text-muted-purple'} max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hear from the families who have trusted us with their children's education
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-clean hover:shadow-clean-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-xl object-cover shadow-clean"
                  />
                  <div className="ml-4">
                    <h4 className="font-display font-bold text-lg text-muted-purple">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-body font-medium text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-base font-body font-medium leading-relaxed mb-6 text-gray-600">
                  "{testimonial.content}"
                </p>
                <div className="flex text-soft-rose space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/enrollment"
                className="inline-flex items-center px-8 py-4 bg-dusty-blue text-white font-display font-bold text-lg rounded-xl hover:bg-dusty-blue-light hover:scale-105 transition-all duration-300 shadow-clean"
              >
                Enroll Now
                <SafeIcon icon={FiArrowRight} className="ml-3 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-muted-purple text-white font-display font-bold text-lg rounded-xl hover:bg-muted-purple-light hover:scale-105 transition-all duration-300 shadow-clean"
              >
                Contact Us
                <SafeIcon icon={FiMessageCircle} className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;