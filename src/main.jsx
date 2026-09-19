import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import cursorImage from './assets/Curser-_1_.png'; 

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div
        style={{
          cursor: `url(${cursorImage}) 0 0, auto`, 
          height: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
