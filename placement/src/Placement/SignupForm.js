import React, { useState } from 'react';
import './StudentPortal.css';
function SignupForm({ onToggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const url = 'http://localhost:8080/users/signup';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.status) {
        localStorage.setItem('userdata', JSON.stringify(data));
        window.location.href = '/student-dashboard';
      } else {
        setErrorMessage(data.message || 'Signup failed.');
      }
    } catch (error) { 
      setErrorMessage('Error connecting to server, please try again later.');
      console.log(error.message);
      
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Sign Up for Student Portal</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="submit-btn">
          {loading ? 'Processing...' : 'Sign Up'}
        </button>
      </form>
      <p>
        Already have an account? <button className="toggle-btn" onClick={onToggleForm}>Login</button>
      </p>
    </div>
  );
}

export default SignupForm;
