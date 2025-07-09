import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import toast from 'react-hot-toast';

const { FiUser, FiMail, FiPhone, FiCalendar, FiCheck, FiSend, FiDownload } = FiIcons;

const Enrollment = () => {
  const { darkMode } = useTheme();
  const { addItem } = useData();
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
    additionalInfo: ''
  });

  const programs = [
    'Childcare Program',
    'Toddler Program',
    'Nursery 1',
    'Nursery 2',
    'Kindergarten',
    'Tutorial Classes'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add enrollment to data
    addItem('students', {
      ...formData,
      status: 'pending',
      enrollmentDate: new Date().toISOString()
    });
    toast.success('Enrollment application submitted successfully!');
    setFormData({
      childName: '',
      childAge: '',
      parentName: '',
      email: '',
      phone: '',
      program: '',
      startDate: '',
      additionalInfo: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the enrollment form with your child\'s information'
    },
    {
      step: 2,
      title: 'Schedule Visit',
      description: 'Visit our facility to meet our staff and see our programs'
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Brief assessment to determine the best program for your child'
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Complete enrollment and begin your child\'s learning journey'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Changed to solid Muted Purple */}
      <section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-muted-purple'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Enroll Your Child
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Begin your child's educational journey with us. Join our loving community where faith, learning, and growth come together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Enrollment Steps - Changed to solid Dusty Blue */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-dusty-blue'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-white'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Enrollment Process
            </motion.h2>
            <motion.p 
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-white'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Simple steps to get your child started at Lil' Hale Learners
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className="w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Enrollment Application
            </motion.h2>
            <motion.p 
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Please fill out this form to begin the enrollment process
            </motion.p>
          </div>
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Child's Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter child's full name"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Child's Age *
                </label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  <option value="">Select age</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                  <option value="6+">6+ years</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Parent/Guardian Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Email Address *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Phone Number *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Preferred Program *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Preferred Start Date *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiCalendar} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                  placeholder="Any special needs, allergies, or additional information..."
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-soft-rose text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                Submit Application
              </motion.button>
              <motion.a
                href="/application-form.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-soft-rose text-soft-rose font-semibold rounded-full hover:bg-soft-rose hover:text-white transition-all duration-300"
              >
                <SafeIcon icon={FiDownload} className="mr-2 w-5 h-5" />
                Download PDF Form
              </motion.a>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Contact Information - Changed to solid Warm Blush */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-warm-blush'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-muted-purple'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Questions About Enrollment?
            </motion.h2>
            <motion.p 
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-muted-purple'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We're here to help! Contact us for more information about our programs and enrollment process.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <div className="w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
              </div>
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Call Us
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                (555) 123-4567
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <div className="w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
              </div>
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Email Us
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                info@lilhalelearners.com
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-center p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <div className="w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCalendar} className="w-8 h-8 text-white" />
              </div>
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Visit Us
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Schedule a tour today
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;