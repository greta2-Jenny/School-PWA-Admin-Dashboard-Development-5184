import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const { 
  FiSettings, FiUser, FiLock, FiMail, FiPhone, FiMapPin, 
  FiSave, FiEye, FiEyeOff, FiGlobe, FiFacebook, FiInstagram, FiTwitter
} = FiIcons;

const AdminSettings = () => {
  const { darkMode } = useTheme();
  const { data, updateSettings } = useData();
  const { changePassword } = useAuth();
  const [activeTab, setActiveTab] = useState('general');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [generalSettings, setGeneralSettings] = useState({
    siteName: data.settings.siteName,
    tagline: data.settings.tagline,
    contactEmail: data.settings.contactEmail,
    phone: data.settings.phone,
    address: data.settings.address,
    primaryColor: data.settings.primaryColor,
    secondaryColor: data.settings.secondaryColor
  });

  const [socialSettings, setSocialSettings] = useState({
    facebook: data.settings.socialMedia.facebook,
    instagram: data.settings.socialMedia.instagram,
    twitter: data.settings.socialMedia.twitter
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    
    updateSettings({
      ...generalSettings,
      socialMedia: {
        facebook: socialSettings.facebook,
        instagram: socialSettings.instagram,
        twitter: socialSettings.twitter
      }
    });
    
    toast.success('Settings updated successfully!');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match!');
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }
    
    try {
      const result = await changePassword(passwordData.currentPassword, passwordData.newPassword);
      
      if (result.success) {
        toast.success('Password changed successfully!');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        toast.error(result.message || 'Failed to change password');
      }
    } catch (error) {
      toast.error('An error occurred while changing password');
    }
  };

  const tabs = [
    { id: 'general', label: 'General', icon: FiSettings },
    { id: 'security', label: 'Security', icon: FiLock }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your application settings and preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`font-display font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h3>
              
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-600'
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'general' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className={`font-display font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  General Settings
                </h3>
                
                <form onSubmit={handleGeneralSubmit} className="space-y-6">
                  {/* Site Information */}
                  <div>
                    <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Site Information
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Site Name *
                        </label>
                        <input
                          type="text"
                          value={generalSettings.siteName}
                          onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                          required
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={generalSettings.tagline}
                          onChange={(e) => setGeneralSettings({...generalSettings, tagline: e.target.value})}
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Contact Information
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Email *
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            value={generalSettings.contactEmail}
                            onChange={(e) => setGeneralSettings({...generalSettings, contactEmail: e.target.value})}
                            required
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Phone *
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            value={generalSettings.phone}
                            onChange={(e) => setGeneralSettings({...generalSettings, phone: e.target.value})}
                            required
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Address *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiMapPin} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={generalSettings.address}
                          onChange={(e) => setGeneralSettings({...generalSettings, address: e.target.value})}
                          required
                          className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Social Media
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Facebook
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiFacebook} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            value={socialSettings.facebook}
                            onChange={(e) => setSocialSettings({...socialSettings, facebook: e.target.value})}
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            placeholder="https://facebook.com/yourpage"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Instagram
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiInstagram} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            value={socialSettings.instagram}
                            onChange={(e) => setSocialSettings({...socialSettings, instagram: e.target.value})}
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            placeholder="https://instagram.com/yourprofile"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Twitter
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiTwitter} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            value={socialSettings.twitter}
                            onChange={(e) => setSocialSettings({...socialSettings, twitter: e.target.value})}
                            className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            placeholder="https://twitter.com/yourhandle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Theme Colors */}
                  <div>
                    <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Theme Colors
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Primary Color
                        </label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="color"
                            value={generalSettings.primaryColor}
                            onChange={(e) => setGeneralSettings({...generalSettings, primaryColor: e.target.value})}
                            className="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={generalSettings.primaryColor}
                            onChange={(e) => setGeneralSettings({...generalSettings, primaryColor: e.target.value})}
                            className={`flex-1 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Secondary Color
                        </label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="color"
                            value={generalSettings.secondaryColor}
                            onChange={(e) => setGeneralSettings({...generalSettings, secondaryColor: e.target.value})}
                            className="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={generalSettings.secondaryColor}
                            onChange={(e) => setGeneralSettings({...generalSettings, secondaryColor: e.target.value})}
                            className={`flex-1 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <SafeIcon icon={FiSave} className="inline-block mr-2 w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className={`font-display font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Security Settings
                </h3>
                
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <div>
                    <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Change Password
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Current Password *
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                            required
                            className={`w-full pl-10 pr-12 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            <SafeIcon icon={showCurrentPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          New Password *
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            required
                            className={`w-full pl-10 pr-12 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            <SafeIcon icon={showNewPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Confirm New Password *
                        </label>
                        <div className="relative">
                          <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                            required
                            className={`w-full pl-10 pr-12 py-2 rounded-lg border transition-colors duration-200 ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            <SafeIcon icon={showConfirmPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <SafeIcon icon={FiSave} className="inline-block mr-2 w-4 h-4" />
                      Change Password
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;