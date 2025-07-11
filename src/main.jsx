```jsx
// Update the logo preloading
const logoUrl = "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752209328393-blob";
const img = new Image();
img.onload = () => console.log('Logo image loaded successfully');
img.onerror = () => console.error('Failed to load logo image');
img.src = logoUrl;
```