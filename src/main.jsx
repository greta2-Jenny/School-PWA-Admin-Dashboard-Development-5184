import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

// Function to check if images are loading properly
const checkImageLoading = () => {
  const imagesToCheck = [
    '/custom-logo.png', // Add the new custom logo
    '/logo.png',
    '/lamb-logo.svg',
    '/logo-icon.svg',
    '/favicon.svg',
    '/favicon.ico',
    '/apple-touch-icon.png'
  ];
  
  imagesToCheck.forEach(src => {
    const img = new Image();
    img.onload = () => console.log(`Image loaded successfully: ${src}`);
    img.onerror = () => console.error(`Failed to load image: ${src}`);
    img.src = src;
  });
};

// Register service worker if available
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
      
    // Check image loading
    checkImageLoading();
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </HashRouter>
  </StrictMode>
);