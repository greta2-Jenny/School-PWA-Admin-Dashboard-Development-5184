import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Simple hash function for browser compatibility
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Default admin credentials (hashed)
  const [adminCredentials, setAdminCredentials] = useState(() => {
    const saved = localStorage.getItem('adminCredentials');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      username: 'admin',
      password: simpleHash('password')
    };
  });

  useEffect(() => {
    // Check for existing session
    const token = Cookies.get('adminToken');
    const userData = Cookies.get('adminUser');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
  }, [adminCredentials]);

  const login = async (username, password) => {
    try {
      const hashedPassword = simpleHash(password);
      
      if (username === adminCredentials.username && hashedPassword === adminCredentials.password) {
        const userData = {
          id: 1,
          username: adminCredentials.username,
          role: 'admin',
          loginTime: new Date().toISOString()
        };
        
        const token = btoa(JSON.stringify(userData));
        
        Cookies.set('adminToken', token, { expires: 7 });
        Cookies.set('adminUser', JSON.stringify(userData), { expires: 7 });
        
        setIsAuthenticated(true);
        setUser(userData);
        
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const logout = () => {
    Cookies.remove('adminToken');
    Cookies.remove('adminUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const hashedCurrentPassword = simpleHash(currentPassword);
      
      if (hashedCurrentPassword === adminCredentials.password) {
        const newHashedPassword = simpleHash(newPassword);
        setAdminCredentials(prev => ({
          ...prev,
          password: newHashedPassword
        }));
        return { success: true };
      } else {
        return { success: false, message: 'Current password is incorrect' };
      }
    } catch (error) {
      return { success: false, message: 'Password change failed' };
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};