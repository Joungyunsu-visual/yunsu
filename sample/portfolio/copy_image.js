// Copy the provided image to portfolio
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\b385df30-3747-44f3-9bc7-6d3ab9860fa9\\0e2df974-effc-402a-95ad-ba90c74be0ff.png';
const destPath = 'c:\\Users\\User\\Documents\\joungyunsu\\Work_RnD\\Study_Online\\01_ShareX\\Part 03\\Part 3\\sample\\portfolio\\hero-image.png';

fs.copyFileSync(srcPath, destPath);
console.log('Image copied successfully.');
