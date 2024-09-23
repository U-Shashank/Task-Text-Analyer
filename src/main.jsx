import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        className: 'bg-gray-800 text-gray-200',
        style: {
          background: '#2d3748',
          color: '#edf2f7',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        duration: 1500
      }}
    />
    <App />
  </StrictMode>,
)
