import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Placement/Home';
import StudentDashboard from './Placement/StudentDashboard';
import StudentPortal from './Placement/StudentPortel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/student-portal" element={<StudentPortal />} /> {/* This renders the login/signup page */}
          <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* This renders the student dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
