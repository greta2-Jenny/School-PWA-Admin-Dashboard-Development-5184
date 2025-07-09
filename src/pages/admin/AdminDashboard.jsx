import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { useAuth } from '../../contexts/AuthContext';

const { FiUsers, FiBookOpen, FiMessageCircle, FiTrendingUp, FiAward, FiCalendar, FiMail, FiPhone } = FiIcons;

const AdminDashboard = () => {
  const { darkMode } = useTheme();
  const { data } = useData();
  const { user } = useAuth();

  const stats = [
    { 
      title: 'Total Students', 
      value: '245', 
      change: '+12%', 
      icon: FiUsers,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Active Courses', 
      value: '6', 
      change: '+0%', 
      icon: FiBookOpen,
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Forum Posts', 
      value: data.forums?.length || '0', 
      change: '+8%', 
      icon: FiMessageCircle,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Certificates', 
      value: '156', 
      change: '+15%', 
      icon: FiAward,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const recentActivities = [
    { 
      action: 'New enrollment', 
      details: 'Emma Johnson enrolled in Nursery 1',
      time: '2 hours ago',
      icon: FiUsers
    },
    { 
      action: 'Forum post', 
      details: 'New discussion about Christmas program',
      time: '4 hours ago',
      icon: FiMessageCircle
    },
    { 
      action: 'Certificate issued', 
      details: 'Liam Chen completed Toddler Program',
      time: '1 day ago',
      icon: FiAward
    },
    { 
      action: 'Progress update', 
      details: 'Monthly progress reports generated',
      time: '2 days ago',
      icon: FiTrendingUp
    }
  ];

  const upcomingEvents = [
    { 
      title: 'Parent-Teacher Conference', 
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM'
    },
    { 
      title: 'Christmas Program', 
      date: '2024-12-20',
      time: '10:00 AM - 12:00 PM'
    },
    { 
      title: 'Staff Meeting', 
      date: '2024-02-10',
      time: '2:00 PM - 3:00 PM'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Dashboard
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Welcome back, {user?.username}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-500" />
                  <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-6 rounded-xl shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={activity.icon} className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activity.action}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {activity.details}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className={`p-6 rounded-xl shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quick Actions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Add Student', icon: FiUsers, color: 'from-blue-500 to-blue-600' },
              { title: 'Create Course', icon: FiBookOpen, color: 'from-green-500 to-green-600' },
              { title: 'Send Message', icon: FiMail, color: 'from-purple-500 to-purple-600' },
              { title: 'View Reports', icon: FiTrendingUp, color: 'from-yellow-500 to-yellow-600' }
            ].map((action, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all duration-200`}
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={action.icon} className="w-5 h-5" />
                  <span className="font-medium">{action.title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;