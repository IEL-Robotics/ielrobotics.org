import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageProvider from './LanguageProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Analytics>
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
  </Analytics>
)
