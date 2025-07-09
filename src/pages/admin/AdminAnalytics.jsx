import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';

const { 
  FiTrendingUp, FiUsers, FiBookOpen, FiAward, FiCalendar, 
  FiBarChart2, FiPieChart, FiActivity, FiArrowUp, FiArrowDown
} = FiIcons;

const AdminAnalytics = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const [timeRange, setTimeRange] = useState('month');

  // Sample analytics data
  const analyticsData = {
    month: {
      enrollments: { 
        value: 24, 
        change: 12, 
        chartData: [16, 18, 14, 21, 19, 22, 24]
      },
      courseCompletion: { 
        value: 18, 
        change: -3, 
        chartData: [12, 15, 18, 20, 19, 18, 18]
      },
      certificates: { 
        value: 15, 
        change: 5, 
        chartData: [8, 10, 12, 14, 12, 13, 15]
      },
      forumActivity: { 
        value: 32, 
        change: 8, 
        chartData: [24, 22, 26, 28, 30, 29, 32]
      }
    },
    quarter: {
      enrollments: { 
        value: 76, 
        change: 22, 
        chartData: [54, 62, 68, 76]
      },
      courseCompletion: { 
        value: 62, 
        change: 15, 
        chartData: [47, 52, 58, 62]
      },
      certificates: { 
        value: 48, 
        change: 10, 
        chartData: [38, 42, 45, 48]
      },
      forumActivity: { 
        value: 114, 
        change: 24, 
        chartData: [90, 98, 106, 114]
      }
    },
    year: {
      enrollments: { 
        value: 245, 
        change: 65, 
        chartData: [180, 200, 210, 225, 245]
      },
      courseCompletion: { 
        value: 198, 
        change: 42, 
        chartData: [156, 168, 178, 186, 198]
      },
      certificates: { 
        value: 156, 
        change: 38, 
        chartData: [118, 128, 136, 145, 156]
      },
      forumActivity: { 
        value: 355, 
        change: 85, 
        chartData: [270, 290, 310, 330, 355]
      }
    }
  };

  // Popular courses data
  const popularCourses = [
    { name: 'Nursery 1', enrollments: 68, completion: 92 },
    { name: 'Toddler Program', enrollments: 54, completion: 88 },
    { name: 'Kindergarten', enrollments: 42, completion: 95 },
    { name: 'Nursery 2', enrollments: 38, completion: 90 },
    { name: 'Childcare Program', enrollments: 28, completion: 85 }
  ];

  // Demographics data
  const demographics = {
    ageGroups: [
      { label: '2 years', value: 25 },
      { label: '3 years', value: 35 },
      { label: '4 years', value: 28 },
      { label: '5+ years', value: 12 }
    ],
    gender: [
      { label: 'Girls', value: 52 },
      { label: 'Boys', value: 48 }
    ]
  };

  // Recent activities
  const recentActivities = [
    { 
      type: 'enrollment', 
      details: 'New student enrolled in Nursery 1', 
      time: '2 hours ago' 
    },
    { 
      type: 'completion', 
      details: 'Emma Johnson completed Toddler Program', 
      time: '1 day ago' 
    },
    { 
      type: 'certificate', 
      details: 'Certificate issued to Liam Chen', 
      time: '2 days ago' 
    },
    { 
      type: 'forum', 
      details: 'New discussion about Christmas program', 
      time: '3 days ago' 
    }
  ];

  // Simple line chart component
  const LineChart = ({ data, color }) => {
    const maxValue = Math.max(...data);
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value / maxValue) * 80);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="w-full h-12" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  // Simple bar chart component
  const BarChart = ({ data, height = 120 }) => {
    const maxValue = Math.max(...data.map(item => item.value));
    
    return (
      <div className="flex items-end justify-between h-32 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="w-8 bg-gradient-primary rounded-t-lg transition-all duration-500"
              style={{ height: `${(item.value / maxValue) * height}px` }}
            ></div>
            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Simple pie chart component
  const PieChart = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercent = 0;
    
    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#e5e7eb" />
          {data.map((item, index) => {
            const percent = (item.value / total) * 100;
            const startAngle = cumulativePercent * 3.6;
            cumulativePercent += percent;
            const endAngle = cumulativePercent * 3.6;
            
            const startX = 16 + 16 * Math.cos(Math.PI * startAngle / 180);
            const startY = 16 + 16 * Math.sin(Math.PI * startAngle / 180);
            const endX = 16 + 16 * Math.cos(Math.PI * endAngle / 180);
            const endY = 16 + 16 * Math.sin(Math.PI * endAngle / 180);
            
            const largeArcFlag = percent > 50 ? 1 : 0;
            
            const colors = ['#ff6b9d', '#0ea5e9', '#f97316', '#10b981'];
            
            return (
              <path 
                key={index}
                d={`M 16,16 L ${startX},${startY} A 16,16 0 ${largeArcFlag},1 ${endX},${endY} Z`}
                fill={colors[index % colors.length]}
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {total}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Analytics Dashboard
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Monitor school performance and student metrics
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Time Range:
              </span>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`px-3 py-2 rounded-lg text-sm border transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'New Enrollments', icon: FiUsers, key: 'enrollments', color: 'bg-blue-500' },
            { title: 'Course Completions', icon: FiBookOpen, key: 'courseCompletion', color: 'bg-green-500' },
            { title: 'Certificates Issued', icon: FiAward, key: 'certificates', color: 'bg-yellow-500' },
            { title: 'Forum Activity', icon: FiBarChart2, key: 'forumActivity', color: 'bg-purple-500' }
          ].map((metric, index) => {
            const data = analyticsData[timeRange][metric.key];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${metric.color} rounded-full flex items-center justify-center`}>
                      <SafeIcon icon={metric.icon} className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {metric.title}
                    </h3>
                  </div>
                  
                  <div className={`flex items-center ${data.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <SafeIcon icon={data.change >= 0 ? FiArrowUp : FiArrowDown} className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{Math.abs(data.change)}%</span>
                  </div>
                </div>
                
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {data.value}
                </div>
                
                <LineChart 
                  data={data.chartData} 
                  color={data.change >= 0 ? '#10b981' : '#ef4444'}
                />
              </motion.div>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Popular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`lg:col-span-2 p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Popular Courses
              </h3>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                {timeRange === 'month' ? 'Last 30 days' : timeRange === 'quarter' ? 'Last 3 months' : 'Last 12 months'}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className={darkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'}>
                    <th className={`pb-3 text-left font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Course</th>
                    <th className={`pb-3 text-center font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Enrollments</th>
                    <th className={`pb-3 text-center font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Completion Rate</th>
                    <th className={`pb-3 text-center font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {popularCourses.map((course, index) => (
                    <tr key={index} className={index < popularCourses.length - 1 ? (darkMode ? 'border-b border-gray-700' : 'border-b border-gray-200') : ''}>
                      <td className={`py-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {course.name}
                      </td>
                      <td className={`py-3 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {course.enrollments}
                      </td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary rounded-full"
                              style={{ width: `${course.completion}%` }}
                            ></div>
                          </div>
                          <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {course.completion}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <LineChart 
                          data={[65, 68, 72, 70, 75]} 
                          color="#ff6b9d"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h3 className={`font-display font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Student Demographics
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Age Groups
                </h4>
                <div className="flex items-center">
                  <div className="flex-1">
                    <PieChart data={demographics.ageGroups} />
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      {demographics.ageGroups.map((group, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {group.label}
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {group.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Gender Distribution
                </h4>
                <BarChart data={demographics.gender} height={80} />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`mt-6 p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h3 className={`font-display font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Activity
          </h3>
          
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const getIconByType = (type) => {
                switch (type) {
                  case 'enrollment': return FiUsers;
                  case 'completion': return FiBookOpen;
                  case 'certificate': return FiAward;
                  case 'forum': return FiBarChart2;
                  default: return FiActivity;
                }
              };
              
              const getColorByType = (type) => {
                switch (type) {
                  case 'enrollment': return 'bg-blue-100 text-blue-600';
                  case 'completion': return 'bg-green-100 text-green-600';
                  case 'certificate': return 'bg-yellow-100 text-yellow-600';
                  case 'forum': return 'bg-purple-100 text-purple-600';
                  default: return 'bg-gray-100 text-gray-600';
                }
              };
              
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getColorByType(activity.type)}`}>
                    <SafeIcon icon={getIconByType(activity.type)} className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activity.details}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAnalytics;