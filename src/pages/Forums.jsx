import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import toast from 'react-hot-toast';

const { FiMessageCircle, FiUser, FiClock, FiHeart, FiMessageSquare, FiPlus, FiSearch, FiFilter } = FiIcons;

const Forums = () => {
  const { darkMode } = useTheme();
  const { data, addItem } = useData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general'
  });

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'general', label: 'General Discussion' },
    { value: 'announcements', label: 'Announcements' },
    { value: 'events', label: 'Events' },
    { value: 'questions', label: 'Questions' },
    { value: 'resources', label: 'Resources' }
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Welcome to Lil\' Hale Learners Community',
      content: 'Welcome to our school community forum! Here you can connect with other parents, share experiences, and get updates about school activities.',
      author: 'Admin',
      date: '2024-01-01',
      replies: 5,
      likes: 12,
      category: 'general'
    },
    {
      id: 2,
      title: 'Upcoming Parent-Teacher Conference',
      content: 'Parent-teacher conferences are scheduled for next week. Please check your email for your appointment time.',
      author: 'Mrs. Johnson',
      date: '2024-01-10',
      replies: 12,
      likes: 8,
      category: 'announcements'
    },
    {
      id: 3,
      title: 'Christmas Program Preparation',
      content: 'Our annual Christmas program is coming up! We need volunteers to help with costumes and decorations.',
      author: 'Miss Emily',
      date: '2024-01-15',
      replies: 7,
      likes: 15,
      category: 'events'
    },
    {
      id: 4,
      title: 'Tips for Reading at Home',
      content: 'Here are some great tips for encouraging reading at home with your little ones.',
      author: 'Mrs. Rodriguez',
      date: '2024-01-18',
      replies: 3,
      likes: 6,
      category: 'resources'
    },
    {
      id: 5,
      title: 'Question about Lunch Menu',
      content: 'Does anyone know if the lunch menu will include vegetarian options next month?',
      author: 'Sarah M.',
      date: '2024-01-20',
      replies: 4,
      likes: 2,
      category: 'questions'
    }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewPost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      addItem('forums', {
        ...newPost,
        author: 'Current User',
        date: new Date().toISOString().split('T')[0],
        replies: 0,
        likes: 0
      });
      toast.success('Post created successfully!');
      setNewPost({ title: '', content: '', category: 'general' });
      setShowNewPost(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
              Community Forums
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Connect with other parents, share experiences, and stay updated with school activities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <SafeIcon icon={FiFilter} className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNewPost(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <SafeIcon icon={FiPlus} className="mr-2 w-5 h-5" />
              New Post
            </motion.button>
          </div>
        </div>
      </section>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`w-full max-w-2xl mx-4 p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h3 className={`font-display font-bold text-2xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Create New Post
            </h3>
            
            <form onSubmit={handleNewPost} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Title *
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="Enter post title..."
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Category
                </label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  {categories.slice(1).map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Content *
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                  placeholder="Write your post content..."
                />
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Create Post
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Forum Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiUser} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          by {post.author}
                        </span>
                        <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {formatDate(post.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === 'announcements' ? 'bg-blue-100 text-blue-800' :
                    post.category === 'events' ? 'bg-green-100 text-green-800' :
                    post.category === 'questions' ? 'bg-yellow-100 text-yellow-800' :
                    post.category === 'resources' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {categories.find(c => c.value === post.category)?.label}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {post.content}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className={`flex items-center space-x-1 text-sm hover:text-primary-500 transition-colors duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <SafeIcon icon={FiHeart} className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className={`flex items-center space-x-1 text-sm hover:text-primary-500 transition-colors duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </button>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <SafeIcon icon={FiMessageCircle} className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`font-display font-bold text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                No posts found
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Forums;