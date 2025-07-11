import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import toast from 'react-hot-toast';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageCircle } = FiIcons;

const Contact = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [mapError, setMapError] = useState(false);

  // Using a static map URL for reliability
  const staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Calmar+Subdivision,+Lucban,+Quezon+4328&zoom=15&size=800x400&markers=color:red%7CCalmar+Subdivision,+Lucban,+Quezon+4328&key=AIzaSyBnKWd2V4Q-9Qx-HWZUkxmxQVrKjsQzGPk";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Netlify
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Preload the map image to improve reliability
  useEffect(() => {
    const img = new Image();
    img.onload = () => console.log('Map image loaded successfully');
    img.onerror = () => {
      console.error('Map image failed to load');
      setMapError(true);
    };
    img.src = staticMapUrl;
  }, [staticMapUrl]);

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['(+63) 945-123-4567', 'Call us during school hours'],
      color: 'bg-dusty-blue'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@lilhalelearners.com', 'Send us an email anytime'],
      color: 'bg-soft-rose'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: ['Calmar Subdivision, Lucban, Quezon 4328', 'Visit us at our location'],
      color: 'bg-muted-purple'
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: ['Monday - Friday: 7:00 AM - 6:00 PM', 'Saturday: 8:00 AM - 12:00 PM'],
      color: 'bg-warm-blush'
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
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We'd love to hear from you! Get in touch with us for any questions about our programs or to schedule a visit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information - Changed to solid Dusty Blue */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'solid-bg-dusty-blue'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className={`w-16 h-16 rounded-full ${info.color} flex items-center justify-center mb-4`}>
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className={`text-sm ${i === 0 ? 'font-medium' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`font-display font-bold text-3xl lg:text-4xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Have questions about our programs, enrollment, or want to schedule a visit? We're here to help! Fill out the form and we'll get back to you as soon as possible.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/thank-you"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    >
                      <option value="">Select a subject</option>
                      <option value="enrollment">Enrollment Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-soft-rose text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`font-display font-bold text-2xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiMessageCircle} className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Quick Response
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        We respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiPhone} className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Personal Consultation
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Schedule a personal consultation with our director
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiMapPin} className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Facility Tours
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Visit our facilities and meet our dedicated staff
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Map Implementation */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
                {mapError ? (
                  // Fallback content if map fails to load
                  <div className={`h-96 w-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-2xl`}>
                    <div className="text-center p-6">
                      <SafeIcon icon={FiMapPin} className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <h3 className={`font-display font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Map Unavailable
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xs mx-auto`}>
                        We're located at Calmar Subdivision, Lucban, Quezon 4328. Please use the Google Maps link below for directions.
                      </p>
                    </div>
                  </div>
                ) : (
                  // Static map image (most reliable approach)
                  <div className="static-map-container h-96 w-full relative">
                    <img 
                      src={staticMapUrl}
                      alt="Map showing Calmar Subdivision, Lucban, Quezon" 
                      className="w-full h-full object-cover rounded-2xl"
                      onError={() => setMapError(true)}
                    />
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-soft-rose"></div>
                  </div>
                )}
              </div>
              
              {/* Direct link to Google Maps */}
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/maps?q=Calmar+Subdivision,+Lucban,+Quezon+4328" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center px-6 py-3 rounded-lg ${
                    darkMode ? 'bg-soft-rose text-white' : 'bg-soft-rose text-white'
                  } hover:opacity-90 transition-opacity shadow-lg`}
                >
                  <SafeIcon icon={FiMapPin} className="mr-2 w-5 h-5" />
                  View on Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;