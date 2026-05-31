import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter enables routing for the entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Open src/main.jsx. This is the entry point of your React app. You need to wrap your app with BrowserRouter — this enables routing throughout the entire app.
// What to do: Import BrowserRouter from react-router-dom and wrap <App /> with it.
// Why wrap at this level? Because App.jsx and all its children need access to the router. Wrapping at the root means every component in your app can use routing.