import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  // useState stores the form values as the user types
  // formData is an object holding all three fields together
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  // useNavigate lets you redirect to another page programmatically
  const navigate = useNavigate()

  // This runs every time the user types in any input field
  // e.target.name tells us which field changed (name, email, or password)
  // e.target.value is what the user typed
  // ...formData keeps the other fields unchanged — we only update the one that changed
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // This runs when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault() // stops the page from refreshing on form submit

    try {
      // axios.post sends a POST request to your backend with formData as the body
      await axios.post('https://auth-backend-yeaz.onrender.com/api/auth/signup', formData)
      alert('Signup successful! Please login.')
      navigate('/login') // redirect to login page after signup
    } catch (err) {
      alert(err.response.data.message) // show error message from backend
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* name attribute must match the key in formData */}
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup

// Why one handleChange for all inputs?
// Instead of writing a separate function for each field, [e.target.name] dynamically picks which field to update based on the input's name attribute. Clean and reusable.