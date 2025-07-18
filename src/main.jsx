import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

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

    // Pre-load the correct uploaded lamb logo to ensure it's available
    const logoUrl = "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752140373730-lil_hale_lamb_logo%20%281%29.jpg";
    const img = new Image();
    img.onload = () => console.log('Logo image loaded successfully');
    img.onerror = () => console.error('Failed to load logo image');
    img.src = logoUrl;
    
    // Preload map assets for better performance
    const preloadMapAssets = () => {
      // Preload a static map image as a fallback
      const mapImg = new Image();
      mapImg.src = 'https://maps.googleapis.com/maps/api/staticmap?center=Calmar+Subdivision,+Lucban,+Quezon+4328&zoom=15&size=600x300&key=AIzaSyBnKWd2V4Q-9Qx-HWZUkxmxQVrKjsQzGPk';
    };
    preloadMapAssets();
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