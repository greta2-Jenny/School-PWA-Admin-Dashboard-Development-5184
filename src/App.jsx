import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PWAInstallPrompt from './components/pwa/PWAInstallPrompt';
import PWAUpdateNotification from './components/pwa/PWAUpdateNotification';
import DarkModeToggle from './components/ui/DarkModeToggle';
import FloatingMessenger from './components/ui/FloatingMessenger';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Features from './pages/Features';
import Enrollment from './pages/Enrollment';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Forums from './pages/Forums';
import Courses from './pages/Courses';
import Certificates from './pages/Certificates';
import Progress from './pages/Progress';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminContent from './pages/admin/AdminContent';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminMedia from './pages/admin/AdminMedia';
import AdminSettings from './pages/admin/AdminSettings';

// Contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

// Utils
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <div className="app min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <PWAInstallPrompt />
            <PWAUpdateNotification />
            <DarkModeToggle />
            <FloatingMessenger />
            
            {!isOnline && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white py-2 px-4 text-center"
              >
                You are currently offline. Some features may not be available.
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<><Header /><Home /><Footer /></>} />
                <Route path="/about" element={<><Header /><About /><Footer /></>} />
                <Route path="/programs" element={<><Header /><Programs /><Footer /></>} />
                <Route path="/features" element={<><Header /><Features /><Footer /></>} />
                <Route path="/enrollment" element={<><Header /><Enrollment /><Footer /></>} />
                <Route path="/gallery" element={<><Header /><Gallery /><Footer /></>} />
                <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
                <Route path="/forums" element={<><Header /><Forums /><Footer /></>} />
                <Route path="/courses" element={<><Header /><Courses /><Footer /></>} />
                <Route path="/certificates" element={<><Header /><Certificates /><Footer /></>} />
                <Route path="/progress" element={<><Header /><Progress /><Footer /></>} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                <Route path="/admin/users" element={<PrivateRoute><AdminUsers /></PrivateRoute>} />
                <Route path="/admin/content" element={<PrivateRoute><AdminContent /></PrivateRoute>} />
                <Route path="/admin/analytics" element={<PrivateRoute><AdminAnalytics /></PrivateRoute>} />
                <Route path="/admin/media" element={<PrivateRoute><AdminMedia /></PrivateRoute>} />
                <Route path="/admin/settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />
              </Routes>
            </AnimatePresence>
          </div>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;