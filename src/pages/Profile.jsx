import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Profile(){
// user will hold the data we get back from the backend
// starts as null because we haven't fetched anything yet
const [user, setUser] = useState(null)

const navigate = useNavigate()

useEffect(() => {
  // read the token from localStorage
  const token = localStorage.getItem('token')

  // if no token found, redirect to login immediately
  if (!token) {
    navigate('/login')
    return
  }

  // fetch user data from backend, sending token in the header
  axios.get('http://localhost:5000/api/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    // store the user data in state
    setUser(response.data)
  })
  .catch((err) => {
    // if token is invalid or expired, redirect to login
    navigate('/login')
  })

}, []) 
// the empty [] means this runs only once — when the component first loads

const handleLogout = () => {
  // remove token from localStorage
  localStorage.removeItem('token')
  // redirect to login
  navigate('/login')
}

    return (
  <div>
    <h1>Profile Page</h1>

    {/* user is null until the data loads — only show when it's ready */}
    {user ? (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
)
}

export default Profile


// sussseful login then to profile

// Now let's verify the token was actually saved. In your browser press F12, go to Application tab, then Local Storage → http://localhost:5173.

// Do you see a token key with a long JWT value?
// Token is saved. Login is fully working.
// Now let's build the Profile page. This page needs to:

// When it loads — read the token from localStorage and send it to the backend to get the user's data
// Display the user's name and email
// Have a logout button that clears the token and redirects to login

// This is where useEffect comes in — it runs code when the component first loads, which is exactly when we want to fetch the user data.

// Why user ? ... : ...?
// When the page first loads, user is null — the fetch hasn't finished yet. So we show "Loading..." until the data arrives, then switch to showing the actual data.