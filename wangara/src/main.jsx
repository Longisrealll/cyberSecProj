import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Supports weights 400-700
import '@fontsource-variable/lora';
import '@fontsource/source-serif-pro';
// Supports weights 100-700
import '@fontsource-variable/roboto-mono';
// Supports weights 400-900
import '@fontsource-variable/ruda';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
