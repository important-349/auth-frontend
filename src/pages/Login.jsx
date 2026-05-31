import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
    const navigate = useNavigate()
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
    const handleSubmit = async (e) => {
    e.preventDefault() 

    try {
      
      const response = await axios.post('https://auth-backend-yeaz.onrender.com/api/auth/login', formData)
      localStorage.setItem('token', response.data.token)
      alert('successful login.')
      navigate('/profile') 
    } catch (err) {
      alert(err.response.data.message) // show error message from backend
    }
  }
    return(
        
        <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">login</button>
      </form>
    </div>
    )
}

export default Login