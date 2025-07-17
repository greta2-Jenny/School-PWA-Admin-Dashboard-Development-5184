import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import toast from 'react-hot-toast';

const { FiSend, FiDownload, FiUser, FiMail, FiPhone, FiCalendar } = FiIcons;

const Enrollment = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    childName: '',
    birthDate: '',
    parentName: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Enrollment form submitted successfully!');
    setFormData({
      childName: '',
      birthDate: '',
      parentName: '',
      email: '',
      phone: '',
      program: '',
      startDate: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section - Changed from gradient to solid color */}
      <section className={`relative py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-muted-purple'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Enrollment
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Begin your child's journey at Lil' Hale Learners
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rest of the component remains exactly the same */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Application Form
              </h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Please complete the form below to begin the enrollment process. Our admissions team will contact you within 2-3 business days to schedule a campus tour and discuss the next steps.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Child's Full Name *
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
                        placeholder="Child's full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiCalendar} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Parent/Guardian full name"
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                          darkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Program of Interest *
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
                      <option value="Childcare Program">Childcare Program (2+ years)</option>
                      <option value="Toddler Program">Toddler Program (2+ years)</option>
                      <option value="Nursery 1">Nursery 1 (3 years)</option>
                      <option value="Nursery 2">Nursery 2 (4 years)</option>
                      <option value="Kindergarten">Kindergarten (5 years)</option>
                      <option value="Tutorial Classes">Tutorial Classes (All ages)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Preferred Start Date
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiCalendar} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder="Please share any additional information that would help us understand your child's needs..."
                  />
                </div>

                {/* Form submission buttons */}
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
                    href="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752715662879-Lil_Hale_Learners_Enrollment_Form_under_1mb.pdf"
                    download="Lil_Hale_Learners_Enrollment_Form.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border-2 border-soft-rose text-soft-rose font-semibold rounded-full hover:bg-soft-rose hover:text-white transition-all duration-300"
                  >
                    <SafeIcon icon={FiDownload} className="mr-2 w-5 h-5" />
                    Download PDF Form
                  </motion.a>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`font-display font-bold text-2xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Enrollment Process
                </h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-soft-rose text-white font-bold text-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Submit Application
                      </h4>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Complete the online form or download and submit the PDF application
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-dusty-blue text-white font-bold text-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Campus Tour
                      </h4>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Schedule a visit to our school to meet teachers and see our facilities
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-warm-blush text-muted-purple font-bold text-lg">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Family Interview
                      </h4>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Brief meeting to understand your child's needs and answer your questions
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-muted-purple text-white font-bold text-lg">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Enrollment Confirmation
                      </h4>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Complete registration paperwork and secure your child's spot
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`mt-8 p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-soft-rose/10'}`}>
                  <h4 className={`font-display font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Required Documents
                  </h4>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Birth certificate</li>
                    <li>• Immunization records</li>
                    <li>• Completed medical form</li>
                    <li>• Previous school records (if applicable)</li>
                    <li>• 2x2 ID pictures (4 copies)</li>
                  </ul>
                </div>
              </div>
              <div className={`mt-8 p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`font-display font-bold text-2xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Tuition & Fees
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our tuition varies by program. Please contact our office for detailed information about tuition and fees for the current school year.
                </p>
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-dusty-blue/10'}`}>
                  <h4 className={`font-display font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Payment Options
                  </h4>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Annual payment (5% discount)</li>
                    <li>• Semestral payment (3% discount)</li>
                    <li>• Quarterly payment</li>
                    <li>• Monthly payment plan</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Changed from gradient to solid color */}
      <section className={`py-20 ${darkMode ? 'bg-gray-700' : 'solid-bg-soft-rose'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-display font-bold text-3xl lg:text-4xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Join Our School Family?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Begin your child's journey at Lil' Hale Learners today and give them the foundation they need for a bright future
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#enrollment-form"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </a>
            <a
              href="#schedule-tour"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Schedule a Tour
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;