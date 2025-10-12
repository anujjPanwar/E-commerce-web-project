import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContext from './Context/MainContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
    <App />
    </MainContext>
  </StrictMode>,
)
