import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import axios from 'axios';

axios.defaults.baseURL = "https://back-glamourestetic.onrender.com"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>
)
