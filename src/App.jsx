import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      {/* each Route maps a URL path to a page component */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
// Why Routes and Route?

// Routes — wraps all your routes, renders only the one that matches the current URL
// Route — maps a path like /signup to a component like <Signup />
export default App