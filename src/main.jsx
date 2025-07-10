import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

// Register service worker if available
if ('serviceWorker' in navigator) {
  window.addEventListener('load',()=> {
    navigator.serviceWorker.register('/sw.js')
      .then((registration)=> {
        console.log('SW registered: ',registration);
      })
      .catch((registrationError)=> {
        console.log('SW registration failed: ',registrationError);
      });

    // Pre-load the uploaded lamb logo to ensure it's available
    const logoUrl="/lil_hale_lamb_logo.jpg";
    const img=new Image();
    img.onload=()=> console.log('Logo image loaded successfully');
    img.onerror=()=> console.error('Failed to load logo image');
    img.src=logoUrl;
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