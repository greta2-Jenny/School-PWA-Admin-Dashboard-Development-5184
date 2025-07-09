import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';

const { 
  FiImage, FiFile, FiUpload, FiTrash2, FiDownload, 
  FiCopy, FiLink, FiX, FiSearch, FiFolder, FiGrid, FiList
} = FiIcons;

const AdminMedia = () => {
  const { darkMode } = useTheme();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Sample media data
  const folders = [
    { id: 'all', name: 'All Media', count: 12 },
    { id: 'gallery', name: 'Gallery Images', count: 8 },
    { id: 'courses', name: 'Course Images', count: 4 },
    { id: 'documents', name: 'Documents', count: 0 }
  ];

  const mediaItems = [
    {
      id: 1,
      name: 'classroom-activities.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300',
      size: '245 KB',
      dimensions: '1200 x 800',
      uploaded: '2024-01-15',
      folder: 'gallery'
    },
    {
      id: 2,
      name: 'story-time.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300',
      size: '320 KB',
      dimensions: '1600 x 1200',
      uploaded: '2024-01-18',
      folder: 'gallery'
    },
    {
      id: 3,
      name: 'outdoor-play.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
      size: '180 KB',
      dimensions: '1400 x 900',
      uploaded: '2024-01-20',
      folder: 'gallery'
    },
    {
      id: 4,
      name: 'art-projects.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300',
      size: '210 KB',
      dimensions: '1500 x 1000',
      uploaded: '2024-01-22',
      folder: 'gallery'
    },
    {
      id: 5,
      name: 'learning-together.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300',
      size: '275 KB',
      dimensions: '1800 x 1200',
      uploaded: '2024-01-25',
      folder: 'gallery'
    },
    {
      id: 6,
      name: 'reading-corner.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300',
      size: '195 KB',
      dimensions: '1400 x 1000',
      uploaded: '2024-01-28',
      folder: 'gallery'
    },
    {
      id: 7,
      name: 'garden-time.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581579186913-47e14c7f3e2e?w=300',
      size: '230 KB',
      dimensions: '1600 x 1100',
      uploaded: '2024-02-01',
      folder: 'gallery'
    },
    {
      id: 8,
      name: 'music-class.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516627145497-ae4a83c8e8e9?w=300',
      size: '265 KB',
      dimensions: '1700 x 1200',
      uploaded: '2024-02-05',
      folder: 'gallery'
    },
    {
      id: 9,
      name: 'childcare-program.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300',
      size: '220 KB',
      dimensions: '1600 x 1000',
      uploaded: '2024-02-08',
      folder: 'courses'
    },
    {
      id: 10,
      name: 'toddler-program.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300',
      size: '190 KB',
      dimensions: '1500 x 900',
      uploaded: '2024-02-10',
      folder: 'courses'
    },
    {
      id: 11,
      name: 'nursery-program.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300',
      size: '250 KB',
      dimensions: '1700 x 1100',
      uploaded: '2024-02-12',
      folder: 'courses'
    },
    {
      id: 12,
      name: 'kindergarten.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
      size: '280 KB',
      dimensions: '1800 x 1200',
      uploaded: '2024-02-15',
      folder: 'courses'
    }
  ];

  // Filter media based on folder and search term
  const filteredMedia = mediaItems.filter(item => {
    const matchesFolder = selectedFolder === 'all' || item.folder === selectedFolder;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  // Format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Simulate file upload
  const handleUpload = (e) => {
    e.preventDefault();
    
    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadProgress(0);
        }, 500);
      }
    }, 200);
  };

  // Copy URL to clipboard
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Media Library
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your images and documents
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <SafeIcon icon={FiUpload} className="mr-2 w-5 h-5" />
              Upload Files
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`font-display font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Folders
              </h3>
              
              <div className="space-y-2">
                {folders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      selectedFolder === folder.id
                        ? 'bg-primary-100 text-primary-600'
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiFolder} className="w-5 h-5" />
                      <span className="font-medium">{folder.name}</span>
                    </div>
                    <span className="text-sm">{folder.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary-100 text-primary-600'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <SafeIcon icon={FiGrid} className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary-100 text-primary-600'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <SafeIcon icon={FiList} className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Media Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredMedia.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(item.url);
                          }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <SafeIcon icon={FiCopy} className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(item.url, '_blank');
                          }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <SafeIcon icon={FiDownload} className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h3 className={`font-medium text-sm truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.name}
                      </h3>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.size}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                      <tr>
                        <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
                          Name
                        </th>
                        <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
                          Size
                        </th>
                        <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
                          Dimensions
                        </th>
                        <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
                          Uploaded
                        </th>
                        <th className={`px-6 py-3 text-right text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} uppercase tracking-wider`}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200 dark:divide-gray-700`}>
                      {filteredMedia.map((item) => (
                        <tr key={item.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-150`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  src={item.url}
                                  alt={item.name}
                                  className="w-10 h-10 rounded-lg object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {item.name}
                                </div>
                                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {item.type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {item.size}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {item.dimensions}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {formatDate(item.uploaded)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => copyToClipboard(item.url)}
                                className={`p-1 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-colors duration-150`}
                              >
                                <SafeIcon icon={FiCopy} className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => window.open(item.url, '_blank')}
                                className={`p-1 rounded-full ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'} transition-colors duration-150`}
                              >
                                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => console.log('Delete', item.id)}
                                className={`p-1 rounded-full ${darkMode ? 'text-gray-300 hover:bg-red-900' : 'text-gray-500 hover:bg-red-100'} hover:text-red-600 transition-colors duration-150`}
                              >
                                <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {filteredMedia.length === 0 && (
              <div className="text-center py-12">
                <SafeIcon icon={FiImage} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  No media found
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Try adjusting your search or upload some files
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`w-full max-w-md mx-4 p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Upload Files
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className={`p-1 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleUpload} className="space-y-4">
              <div className={`border-2 border-dashed rounded-lg p-8 text-center ${
                darkMode 
                  ? 'border-gray-600 bg-gray-700' 
                  : 'border-gray-300 bg-gray-50'
              }`}>
                <SafeIcon icon={FiUpload} className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Drag and drop files here, or click to select
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => console.log('Files selected:', e.target.files)}
                />
              </div>
              
              {uploadProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Uploading...
                    </span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
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
                  disabled={uploadProgress > 0}
                  className={`px-4 py-2 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 ${
                    uploadProgress > 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Upload
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Media Detail Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl max-h-[90vh] mx-4 overflow-auto"
          >
            <div className={`rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedMedia.name}
                  </h3>
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className={`p-1 rounded-lg transition-all duration-200 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        File Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Size:</span>
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{selectedMedia.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dimensions:</span>
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{selectedMedia.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Uploaded:</span>
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{formatDate(selectedMedia.uploaded)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Folder:</span>
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{selectedMedia.folder}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        URL
                      </h4>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={selectedMedia.url}
                          readOnly
                          className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-gray-300' 
                              : 'bg-gray-50 border-gray-300 text-gray-700'
                          }`}
                        />
                        <button
                          onClick={() => copyToClipboard(selectedMedia.url)}
                          className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                        >
                          <SafeIcon icon={FiCopy} className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(selectedMedia.url, '_blank')}
                        className="flex-1 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2 inline" />
                        Download
                      </button>
                      <button
                        onClick={() => console.log('Delete', selectedMedia.id)}
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-red-900 text-red-300 hover:bg-red-800' 
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminMedia;