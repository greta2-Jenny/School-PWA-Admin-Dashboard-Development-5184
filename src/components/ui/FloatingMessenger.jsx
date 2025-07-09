import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../contexts/ThemeContext';

const { FiMessageCircle, FiX, FiSend } = FiIcons;

const FloatingMessenger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { darkMode } = useTheme();

  const handleSendMessage = () => {
    if (message.trim()) {
      alert('Message sent! We\'ll get back to you soon.');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-soft-rose rounded-xl shadow-clean flex items-center justify-center text-white hover:bg-soft-rose-light transition-all duration-300"
      >
        <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="w-7 h-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed bottom-28 right-6 z-50 w-80 rounded-2xl shadow-clean overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } border-2 border-dusty-blue`}
          >
            {/* Header */}
            <div className="bg-muted-purple p-6">
              <h3 className="text-white font-display font-bold text-xl">Message Us</h3>
              <p className="text-white/90 text-sm font-body font-medium">We'll get back to you soon!</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-warm-blush-light'} border border-dotted border-dusty-blue/30`}>
                  <p className={`text-sm font-body font-medium ${darkMode ? 'text-gray-300' : 'text-dark'}`}>
                    Hi! How can we help you today?
                  </p>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-300 font-body font-medium ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-dusty-blue/30 text-dark placeholder-dark/50'
                  } focus:outline-none focus:border-soft-rose focus:scale-103`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-4 py-3 bg-soft-rose text-white rounded-xl hover:bg-soft-rose-light transition-all duration-300"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMessenger;