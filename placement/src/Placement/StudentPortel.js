import React, { useState } from 'react';
import './StudentPortal.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function StudentPortal() {
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between login and signup

  // Function to toggle between Login and Sign-up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="student-portal-container">
      <header className="portal-header">
        <h1>Student Portal</h1>
      </header>

      {isLogin ? <LoginForm onToggleForm={toggleForm} /> : <SignupForm onToggleForm={toggleForm} />}
    </div>
  );
}

export default StudentPortal;
