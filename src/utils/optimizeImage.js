/**
 * Utility function to optimize the lamb logo for cursor use
 * 
 * This script:
 * 1. Takes the uploaded lamb logo
 * 2. Resizes it to 32x32px for optimal cursor size
 * 3. Creates a transparent background version if needed
 * 4. Saves it to the public directory
 */

import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';

async function optimizeCursor() {
  try {
    // Source image path
    const sourcePath = path.resolve(__dirname, '../../public/lil_hale_lamb_logo.jpg');
    
    // Destination path for the optimized cursor
    const destPath = path.resolve(__dirname, '../../public/lamb-cursor.png');
    
    // Create a canvas with the desired cursor size (32x32 pixels)
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // Load the source image
    const image = await loadImage(sourcePath);
    
    // Clear the canvas with a transparent background
    ctx.clearRect(0, 0, 32, 32);
    
    // Draw the image, scaling it to fit the 32x32 canvas
    ctx.drawImage(image, 0, 0, 32, 32);
    
    // Convert the canvas to a PNG buffer with transparency
    const buffer = canvas.toBuffer('image/png');
    
    // Write the buffer to the destination file
    fs.writeFileSync(destPath, buffer);
    
    console.log('Cursor image optimized and saved to:', destPath);
  } catch (error) {
    console.error('Error optimizing cursor image:', error);
  }
}

// Run the optimization
optimizeCursor();

export default optimizeCursor;