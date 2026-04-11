import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChildA from './components/ChildA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChildA />
  </StrictMode>,
)
