import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  // Initialize data from localStorage or defaults
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('schoolData');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      students: [],
      courses: [
        {
          id: uuidv4(),
          title: 'Childcare Program',
          description: 'Comprehensive care for children 2 years and above',
          ageGroup: '2+ years',
          image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
          duration: 'Full Day',
          price: '$150/week',
          features: ['Nutritious meals', 'Nap time', 'Play activities', 'Basic learning']
        },
        {
          id: uuidv4(),
          title: 'Toddler Program',
          description: 'Structured learning for active toddlers',
          ageGroup: '2+ years',
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
          duration: 'Half/Full Day',
          price: '$120/week',
          features: ['Sensory play', 'Social skills', 'Motor development', 'Creative arts']
        },
        {
          id: uuidv4(),
          title: 'Nursery 1',
          description: 'Foundation learning for 3-year-olds',
          ageGroup: '3 years',
          image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
          duration: 'Half Day',
          price: '$100/week',
          features: ['Letter recognition', 'Number basics', 'Bible stories', 'Music & movement']
        },
        {
          id: uuidv4(),
          title: 'Nursery 2',
          description: 'Pre-kindergarten preparation',
          ageGroup: '4 years',
          image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400',
          duration: 'Half Day',
          price: '$110/week',
          features: ['Pre-reading skills', 'Math concepts', 'Science exploration', 'Art projects']
        },
        {
          id: uuidv4(),
          title: 'Kindergarten',
          description: 'School readiness program',
          ageGroup: '5 years',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
          duration: 'Full Day',
          price: '$130/week',
          features: ['Reading & writing', 'Math fundamentals', 'Science projects', 'Social studies']
        },
        {
          id: uuidv4(),
          title: 'Tutorial Classes',
          description: 'Additional academic support',
          ageGroup: 'All ages',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
          duration: 'Flexible',
          price: '$25/session',
          features: ['Individual attention', 'Homework help', 'Skill reinforcement', 'Progress tracking']
        }
      ],
      users: [
        {
          id: uuidv4(),
          name: 'John Doe',
          email: 'john@example.com',
          role: 'parent',
          joinDate: '2024-01-15',
          children: ['Emma Doe', 'Liam Doe'],
          status: 'active'
        },
        {
          id: uuidv4(),
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'teacher',
          joinDate: '2024-01-10',
          subject: 'Nursery 1',
          status: 'active'
        }
      ],
      forums: [
        {
          id: uuidv4(),
          title: 'Welcome to Lil\' Hale Learners Community',
          content: 'Welcome to our school community forum! Here you can connect with other parents, share experiences, and get updates about school activities.',
          author: 'Admin',
          date: '2024-01-01',
          replies: 5,
          category: 'general'
        },
        {
          id: uuidv4(),
          title: 'Upcoming Parent-Teacher Conference',
          content: 'Parent-teacher conferences are scheduled for next week. Please check your email for your appointment time.',
          author: 'Mrs. Johnson',
          date: '2024-01-10',
          replies: 12,
          category: 'announcements'
        }
      ],
      certificates: [
        {
          id: uuidv4(),
          studentName: 'Emma Doe',
          courseName: 'Nursery 1 Completion',
          issueDate: '2024-01-15',
          certificateId: 'LHL-2024-001',
          template: 'basic'
        }
      ],
      progress: [
        {
          id: uuidv4(),
          studentId: uuidv4(),
          studentName: 'Emma Doe',
          course: 'Nursery 1',
          progress: 85,
          achievements: ['Letter A-M mastered', 'Counting to 10', 'Favorite Bible verse learned'],
          lastUpdated: '2024-01-15'
        }
      ],
      gallery: [
        {
          id: uuidv4(),
          title: 'Classroom Activities',
          images: [
            'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
            'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
            'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600'
          ],
          category: 'activities'
        },
        {
          id: uuidv4(),
          title: 'Outdoor Play',
          images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
            'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600'
          ],
          category: 'outdoor'
        }
      ],
      settings: {
        siteName: 'Lil\' Hale Learners',
        tagline: 'Nurturing young minds through faith, play, and learning',
        primaryColor: '#ff6b9d',
        secondaryColor: '#0ea5e9',
        logo: '/logo.png',
        contactEmail: 'info@lilhalelearners.com',
        phone: '(555) 123-4567',
        address: '123 Faith Street, Christian Valley, CV 12345',
        socialMedia: {
          facebook: 'https://facebook.com/lilhalelearners',
          instagram: 'https://instagram.com/lilhalelearners',
          twitter: 'https://twitter.com/lilhalelearners'
        }
      }
    };
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('schoolData', JSON.stringify(data));
  }, [data]);

  // CRUD operations
  const addItem = (collection, item) => {
    setData(prev => ({
      ...prev,
      [collection]: [...prev[collection], { ...item, id: uuidv4() }]
    }));
  };

  const updateItem = (collection, id, updates) => {
    setData(prev => ({
      ...prev,
      [collection]: prev[collection].map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    }));
  };

  const deleteItem = (collection, id) => {
    setData(prev => ({
      ...prev,
      [collection]: prev[collection].filter(item => item.id !== id)
    }));
  };

  const getItem = (collection, id) => {
    return data[collection]?.find(item => item.id === id);
  };

  const getCollection = (collection) => {
    return data[collection] || [];
  };

  const updateSettings = (newSettings) => {
    setData(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  const value = {
    data,
    addItem,
    updateItem,
    deleteItem,
    getItem,
    getCollection,
    updateSettings
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};