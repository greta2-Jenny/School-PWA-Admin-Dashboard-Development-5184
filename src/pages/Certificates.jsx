import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';

const { FiAward, FiDownload, FiEye, FiCalendar, FiUser, FiSearch, FiFilter } = FiIcons;

const Certificates = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');

  // Sample certificates data
  const certificates = [
    {
      id: 1,
      studentName: 'Emma Johnson',
      courseName: 'Nursery 1 Completion',
      issueDate: '2024-01-15',
      certificateId: 'LHL-2024-001',
      template: 'basic',
      grade: 'Excellent'
    },
    {
      id: 2,
      studentName: 'Liam Chen',
      courseName: 'Toddler Program',
      issueDate: '2024-01-20',
      certificateId: 'LHL-2024-002',
      template: 'basic',
      grade: 'Very Good'
    },
    {
      id: 3,
      studentName: 'Olivia Rodriguez',
      courseName: 'Kindergarten',
      issueDate: '2024-01-25',
      certificateId: 'LHL-2024-003',
      template: 'advanced',
      grade: 'Outstanding'
    },
    {
      id: 4,
      studentName: 'Noah Williams',
      courseName: 'Nursery 2',
      issueDate: '2024-02-01',
      certificateId: 'LHL-2024-004',
      template: 'basic',
      grade: 'Good'
    },
    {
      id: 5,
      studentName: 'Sophia Davis',
      courseName: 'Childcare Program',
      issueDate: '2024-02-10',
      certificateId: 'LHL-2024-005',
      template: 'basic',
      grade: 'Very Good'
    },
    {
      id: 6,
      studentName: 'Mason Brown',
      courseName: 'Tutorial Classes',
      issueDate: '2024-02-15',
      certificateId: 'LHL-2024-006',
      template: 'tutorial',
      grade: 'Excellent'
    }
  ];

  const years = ['all', '2024', '2023', '2022'];
  const courses = ['all', 'Nursery 1', 'Nursery 2', 'Kindergarten', 'Toddler Program', 'Childcare Program', 'Tutorial Classes'];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || cert.issueDate.includes(selectedYear);
    const matchesCourse = selectedCourse === 'all' || cert.courseName.includes(selectedCourse);
    
    return matchesSearch && matchesYear && matchesCourse;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'Outstanding': return 'bg-purple-100 text-purple-800';
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Very Good': return 'bg-blue-100 text-blue-800';
      case 'Good': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const CertificatePreview = ({ certificate }) => (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-400 rounded-lg p-8 text-center shadow-lg">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
        </div>
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">
          Certificate of Completion
        </h2>
        <p className="text-gray-600">Lil' Hale Learners Christian Toddler School</p>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-2">This certifies that</p>
        <h3 className="font-display font-bold text-3xl text-primary-600 mb-2">
          {certificate.studentName}
        </h3>
        <p className="text-gray-700 mb-2">has successfully completed the</p>
        <h4 className="font-display font-bold text-xl text-gray-900 mb-4">
          {certificate.courseName}
        </h4>
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getGradeColor(certificate.grade)}`}>
          Grade: {certificate.grade}
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
        <div>
          <p>Certificate ID: {certificate.certificateId}</p>
        </div>
        <div>
          <p>Date: {formatDate(certificate.issueDate)}</p>
        </div>
      </div>
    </div>
  );

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
              Certificates
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Celebrating achievements and milestones in your child's educational journey
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Filter:
                </span>
              </div>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className={`px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="all">All Years</option>
                {years.slice(1).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className={`px-4 py-3 rounded-lg border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="all">All Courses</option>
                {courses.slice(1).map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGradeColor(certificate.grade)}`}>
                    {certificate.grade}
                  </span>
                </div>

                <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {certificate.studentName}
                </h3>
                
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {certificate.courseName}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>{formatDate(certificate.issueDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>{certificate.certificateId}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium">
                    <SafeIcon icon={FiEye} className="mr-2 w-4 h-4" />
                    View
                  </button>
                  <button className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <SafeIcon icon={FiDownload} className="mr-2 w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <SafeIcon icon={FiAward} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                No certificates found
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Preview Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Certificate Preview
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Sample certificate design for completed courses
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CertificatePreview certificate={certificates[0]} />
          </motion.div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className={`font-display font-bold text-3xl lg:text-4xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Achievement Statistics
            </motion.h2>
            <motion.p
              className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Celebrating our students' success over the years
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1,200+', label: 'Certificates Issued', icon: FiAward },
              { number: '95%', label: 'Completion Rate', icon: FiUser },
              { number: '6', label: 'Course Programs', icon: FiAward },
              { number: '26', label: 'Years of Excellence', icon: FiAward }
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
    </div>
  );
};

export default Certificates;