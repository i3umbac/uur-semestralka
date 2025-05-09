import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// handles basic imports and call the app itself

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
