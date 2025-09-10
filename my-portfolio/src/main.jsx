import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Fix para librerías que esperan "global"
window.global ||= window;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
