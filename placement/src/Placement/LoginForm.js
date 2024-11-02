import React, { useState } from 'react';
import './StudentPortal.css';

function LoginForm({ onToggleForm }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const url = `http://localhost:8080/users/login?username=${formData.email}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.password === formData.password) {
        localStorage.setItem('userdata', JSON.stringify(data));
        window.location.href = '/student-dashboard';  // Redirect to dashboard
      } else {
        setErrorMessage('Invalid credentials.');
      }
    } catch (error) {
      setErrorMessage('Error connecting to server, please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Login to Student Portal</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
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
          {loading ? 'Processing...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account? <button className="toggle-btn" onClick={onToggleForm}>Sign Up</button>
      </p>
    </div>
  );
}

export default LoginForm;
