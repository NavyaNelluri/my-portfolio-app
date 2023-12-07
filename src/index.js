// index.js or index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import App from './App';

const root = document.getElementById('root');

// Use createRoot directly
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
