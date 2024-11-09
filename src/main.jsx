import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//where react start, it will run wirh dev
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this is where the app is placed. */}
    <App />
  </StrictMode>,
)
