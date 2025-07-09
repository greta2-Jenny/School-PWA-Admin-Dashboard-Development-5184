import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import toast from 'react-hot-toast';

const { 
  FiEdit, FiPlus, FiTrash2, FiBookOpen, FiMessageCircle, 
  FiImage, FiSave, FiX, FiFilter, FiEye
} = FiIcons;

const AdminContent = () => {
  const { darkMode } = useTheme();
  const { data, addItem, updateItem, deleteItem } = useData();
  const [activeTab, setActiveTab] = useState('courses');
  const [editingItem, setEditingItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState('');

  // Initial form state based on active tab
  const getInitialFormState = () => {
    switch (activeTab) {
      case 'courses':
        return {
          title: '',
          description: '',
          ageGroup: '3 years',
          image: '',
          duration: 'Half Day',
          price: '$100/week',
          features: ['', '', '']
        };
      case 'forums':
        return {
          title: '',
          content: '',
          author: 'Admin',
          date: new Date().toISOString().split('T')[0],
          category: 'general',
          replies: 0,
          likes: 0
        };
      case 'gallery':
        return {
          title: '',
          images: [''],
          category: 'activities'
        };
      default:
        return {};
    }
  };

  const [newItem, setNewItem] = useState(getInitialFormState());

  // Reset form when tab changes
  React.useEffect(() => {
    setNewItem(getInitialFormState());
    setFilter('');
  }, [activeTab]);

  // Get data based on active tab
  const getItems = () => {
    switch (activeTab) {
      case 'courses':
        return data.courses || [];
      case 'forums':
        return data.forums || [];
      case 'gallery':
        return data.gallery || [];
      default:
        return [];
    }
  };

  // Filter items based on search term
  const filteredItems = getItems().filter(item => {
    if (!filter) return true;
    
    return item.title.toLowerCase().includes(filter.toLowerCase()) || 
           (item.description && item.description.toLowerCase().includes(filter.toLowerCase()));
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    
    // Process features array for courses if needed
    let processedItem = { ...newItem };
    
    if (activeTab === 'courses' && processedItem.features) {
      // Filter out empty features
      processedItem.features = processedItem.features.filter(feature => feature.trim !== '');
    }
    
    addItem(activeTab, processedItem);
    toast.success(`${activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)} added successfully!`);
    setShowAddModal(false);
    setNewItem(getInitialFormState());
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    
    updateItem(activeTab, editingItem.id, editingItem);
    toast.success(`${activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)} updated successfully!`);
    setEditingItem(null);
  };

  const handleDeleteItem = (id) => {
    if (window.confirm(`Are you sure you want to delete this ${activeTab.slice(0, -1)}?`)) {
      deleteItem(activeTab, id);
      toast.success(`${activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)} deleted successfully!`);
    }
  };

  // Helper function to update arrays in forms (like features, images)
  const updateArrayField = (array, index, value) => {
    const newArray = [...array];
    newArray[index] = value;
    return newArray;
  };

  // Helper function to add new field to arrays
  const addArrayField = (array) => {
    return [...array, ''];
  };

  // Helper function to remove field from arrays
  const removeArrayField = (array, index) => {
    return array.filter((_, i) => i !== index);
  };

  // Get appropriate icon for the tab
  const getTabIcon = (tab) => {
    switch (tab) {
      case 'courses': return FiBookOpen;
      case 'forums': return FiMessageCircle;
      case 'gallery': return FiImage;
      default: return FiBookOpen;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Content Management
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage courses, forums, and gallery
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <SafeIcon icon={FiPlus} className="mr-2 w-5 h-5" />
              Add {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          {['courses', 'forums', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <SafeIcon icon={getTabIcon(tab)} className="mr-2 w-4 h-4" />
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="mb-6 flex items-center">
          <div className="relative w-full max-w-xs">
            <SafeIcon icon={FiFilter} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Filter ${activeTab}...`}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`pl-10 pr-4 py-2 w-full rounded-lg border transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Image for courses and gallery */}
              {(activeTab === 'courses' || activeTab === 'gallery') && (
                <div className="h-44 overflow-hidden">
                  <img
                    src={activeTab === 'courses' ? item.image : (item.images && item.images[0])}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                    {item.title}
                  </h3>
                  
                  {/* Category/Type Badge */}
                  {activeTab === 'courses' && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                      {item.ageGroup}
                    </span>
                  )}
                  
                  {activeTab === 'forums' && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.category === 'announcements' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'events' ? 'bg-green-100 text-green-800' :
                      item.category === 'questions' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.category}
                    </span>
                  )}
                  
                  {activeTab === 'gallery' && (
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
                
                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'forums' ? item.content : item.description}
                </p>
                
                {/* Additional information based on content type */}
                {activeTab === 'courses' && (
                  <div className="mb-3 text-sm">
                    <div className="flex justify-between text-gray-500 mb-1">
                      <span>{item.duration}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.features && item.features.length > 0 && (
                        <span>{item.features.length} features</span>
                      )}
                    </div>
                  </div>
                )}
                
                {activeTab === 'forums' && (
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>{item.author}</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                )}
                
                {activeTab === 'gallery' && (
                  <div className="text-xs text-gray-500 mb-3">
                    {item.images && (
                      <span>{item.images.length} images</span>
                    )}
                  </div>
                )}
                
                {/* Action buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="px-3 py-1 inline-flex items-center text-sm font-medium bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200"
                  >
                    <SafeIcon icon={FiEdit} className="mr-1 w-4 h-4" />
                    Edit
                  </button>
                  
                  <div className="flex space-x-1">
                    <button
                      onClick={() => window.alert(`View ${activeTab.slice(0, -1)}: ${item.title}`)}
                      className={`p-1 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-colors duration-200`}
                    >
                      <SafeIcon icon={FiEye} className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className={`p-1 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-red-900' : 'text-gray-500 hover:bg-red-100'} hover:text-red-600 transition-colors duration-200`}
                    >
                      <SafeIcon icon={FiTrash2} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <SafeIcon icon={getTabIcon(activeTab)} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`} />
            <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No {activeTab} found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {filter ? `No results for "${filter}"` : `Add your first ${activeTab.slice(0, -1)} to get started`}
            </p>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`w-full max-w-2xl mx-4 p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} max-h-[90vh] overflow-y-auto`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-display font-bold text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Add New {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className={`p-1 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleAddItem} className="space-y-4">
              {/* Common fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={activeTab === 'forums' ? 'md:col-span-2' : ''}>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder={`Enter ${activeTab.slice(0, -1)} title`}
                  />
                </div>

                {/* Course specific fields */}
                {activeTab === 'courses' && (
                  <>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Age Group *
                      </label>
                      <select
                        value={newItem.ageGroup}
                        onChange={(e) => setNewItem({...newItem, ageGroup: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="2+ years">2+ years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                        <option value="All ages">All ages</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Duration *
                      </label>
                      <select
                        value={newItem.duration}
                        onChange={(e) => setNewItem({...newItem, duration: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="Half Day">Half Day</option>
                        <option value="Full Day">Full Day</option>
                        <option value="Half/Full Day">Half/Full Day</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Price *
                      </label>
                      <input
                        type="text"
                        value={newItem.price}
                        onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="e.g. $100/week"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Image URL *
                      </label>
                      <input
                        type="text"
                        value={newItem.image}
                        onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Enter image URL"
                      />
                    </div>
                  </>
                )}

                {/* Forum specific fields */}
                {activeTab === 'forums' && (
                  <>
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Author *
                        </label>
                        <input
                          type="text"
                          value={newItem.author}
                          onChange={(e) => setNewItem({...newItem, author: e.target.value})}
                          required
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          placeholder="Enter author name"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Category *
                        </label>
                        <select
                          value={newItem.category}
                          onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                          required
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-white border-gray-300 text-gray-900'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="general">General</option>
                          <option value="announcements">Announcements</option>
                          <option value="events">Events</option>
                          <option value="questions">Questions</option>
                          <option value="resources">Resources</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Gallery specific fields */}
                {activeTab === 'gallery' && (
                  <>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Category *
                      </label>
                      <select
                        value={newItem.category}
                        onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="activities">Activities</option>
                        <option value="outdoor">Outdoor Play</option>
                        <option value="events">Events</option>
                        <option value="facilities">Facilities</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Description field */}
              {activeTab !== 'forums' && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Description *
                  </label>
                  <textarea
                    value={newItem.description || ''}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                    required
                    rows="3"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder={`Enter ${activeTab.slice(0, -1)} description`}
                  />
                </div>
              )}

              {/* Content field for forums */}
              {activeTab === 'forums' && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content *
                  </label>
                  <textarea
                    value={newItem.content || ''}
                    onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                    required
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder="Enter post content"
                  />
                </div>
              )}

              {/* Features array for courses */}
              {activeTab === 'courses' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Features
                    </label>
                    <button
                      type="button"
                      onClick={() => setNewItem({...newItem, features: addArrayField(newItem.features || [])})}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      + Add Feature
                    </button>
                  </div>
                  
                  {newItem.features && newItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => setNewItem({
                          ...newItem, 
                          features: updateArrayField(newItem.features, index, e.target.value)
                        })}
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder={`Feature ${index + 1}`}
                      />
                      
                      <button
                        type="button"
                        onClick={() => setNewItem({
                          ...newItem, 
                          features: removeArrayField(newItem.features, index)
                        })}
                        className={`p-2 ml-2 rounded-lg ${
                          darkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <SafeIcon icon={FiX} className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Images array for gallery */}
              {activeTab === 'gallery' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Images *
                    </label>
                    <button
                      type="button"
                      onClick={() => setNewItem({...newItem, images: addArrayField(newItem.images || [])})}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      + Add Image
                    </button>
                  </div>
                  
                  {newItem.images && newItem.images.map((image, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => setNewItem({
                          ...newItem, 
                          images: updateArrayField(newItem.images, index, e.target.value)
                        })}
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder={`Image URL ${index + 1}`}
                        required={index === 0} // Require at least one image
                      />
                      
                      {newItem.images.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setNewItem({
                            ...newItem, 
                            images: removeArrayField(newItem.images, index)
                          })}
                          className={`p-2 ml-2 rounded-lg ${
                            darkMode 
                              ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          <SafeIcon icon={FiX} className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-4 justify-end pt-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiPlus} className="inline-block mr-2 w-4 h-4" />
                  Add {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`w-full max-w-2xl mx-4 p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} max-h-[90vh] overflow-y-auto`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-display font-bold text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Edit {activeTab.slice(0, -1).charAt(0).toUpperCase() + activeTab.slice(0, -1).slice(1)}
              </h3>
              <button
                onClick={() => setEditingItem(null)}
                className={`p-1 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
            </div>
            
            {/* Edit form - similar to add form but with editingItem data */}
            {/* This would be very similar to the Add form but with editingItem state instead of newItem */}
            <form onSubmit={handleUpdateItem} className="space-y-4">
              {/* Common fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={activeTab === 'forums' ? 'md:col-span-2' : ''}>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                    required
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder={`Enter ${activeTab.slice(0, -1)} title`}
                  />
                </div>

                {/* Course specific fields */}
                {activeTab === 'courses' && (
                  <>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Age Group *
                      </label>
                      <select
                        value={editingItem.ageGroup}
                        onChange={(e) => setEditingItem({...editingItem, ageGroup: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="2+ years">2+ years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                        <option value="All ages">All ages</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Duration *
                      </label>
                      <select
                        value={editingItem.duration}
                        onChange={(e) => setEditingItem({...editingItem, duration: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="Half Day">Half Day</option>
                        <option value="Full Day">Full Day</option>
                        <option value="Half/Full Day">Half/Full Day</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Price *
                      </label>
                      <input
                        type="text"
                        value={editingItem.price}
                        onChange={(e) => setEditingItem({...editingItem, price: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="e.g. $100/week"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Image URL *
                      </label>
                      <input
                        type="text"
                        value={editingItem.image}
                        onChange={(e) => setEditingItem({...editingItem, image: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Enter image URL"
                      />
                    </div>
                  </>
                )}

                {/* Forum specific fields */}
                {activeTab === 'forums' && (
                  <>
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Author *
                        </label>
                        <input
                          type="text"
                          value={editingItem.author}
                          onChange={(e) => setEditingItem({...editingItem, author: e.target.value})}
                          required
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          placeholder="Enter author name"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Category *
                        </label>
                        <select
                          value={editingItem.category}
                          onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                          required
                          className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-white border-gray-300 text-gray-900'
                          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="general">General</option>
                          <option value="announcements">Announcements</option>
                          <option value="events">Events</option>
                          <option value="questions">Questions</option>
                          <option value="resources">Resources</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Gallery specific fields */}
                {activeTab === 'gallery' && (
                  <>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Category *
                      </label>
                      <select
                        value={editingItem.category}
                        onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                        required
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      >
                        <option value="activities">Activities</option>
                        <option value="outdoor">Outdoor Play</option>
                        <option value="events">Events</option>
                        <option value="facilities">Facilities</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Description field */}
              {activeTab !== 'forums' && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Description *
                  </label>
                  <textarea
                    value={editingItem.description || ''}
                    onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                    required
                    rows="3"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder={`Enter ${activeTab.slice(0, -1)} description`}
                  />
                </div>
              )}

              {/* Content field for forums */}
              {activeTab === 'forums' && (
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content *
                  </label>
                  <textarea
                    value={editingItem.content || ''}
                    onChange={(e) => setEditingItem({...editingItem, content: e.target.value})}
                    required
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                    placeholder="Enter post content"
                  />
                </div>
              )}

              {/* Features array for courses */}
              {activeTab === 'courses' && editingItem.features && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Features
                    </label>
                    <button
                      type="button"
                      onClick={() => setEditingItem({...editingItem, features: [...editingItem.features, '']})}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      + Add Feature
                    </button>
                  </div>
                  
                  {editingItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const updatedFeatures = [...editingItem.features];
                          updatedFeatures[index] = e.target.value;
                          setEditingItem({...editingItem, features: updatedFeatures});
                        }}
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder={`Feature ${index + 1}`}
                      />
                      
                      <button
                        type="button"
                        onClick={() => {
                          const updatedFeatures = editingItem.features.filter((_, i) => i !== index);
                          setEditingItem({...editingItem, features: updatedFeatures});
                        }}
                        className={`p-2 ml-2 rounded-lg ${
                          darkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <SafeIcon icon={FiX} className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Images array for gallery */}
              {activeTab === 'gallery' && editingItem.images && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Images *
                    </label>
                    <button
                      type="button"
                      onClick={() => setEditingItem({...editingItem, images: [...editingItem.images, '']})}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      + Add Image
                    </button>
                  </div>
                  
                  {editingItem.images.map((image, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => {
                          const updatedImages = [...editingItem.images];
                          updatedImages[index] = e.target.value;
                          setEditingItem({...editingItem, images: updatedImages});
                        }}
                        className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder={`Image URL ${index + 1}`}
                        required={index === 0} // Require at least one image
                      />
                      
                      {editingItem.images.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updatedImages = editingItem.images.filter((_, i) => i !== index);
                            setEditingItem({...editingItem, images: updatedImages});
                          }}
                          className={`p-2 ml-2 rounded-lg ${
                            darkMode 
                              ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          <SafeIcon icon={FiX} className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-4 justify-end pt-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiSave} className="inline-block mr-2 w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;