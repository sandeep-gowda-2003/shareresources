import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './assets/images/logo.jpg'; // Import the logo

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="navbar">
          {/* Logo Image */}
          <img src={logo} alt="Career Connector Logo" className="logo-img" />
          <div className="nav-links">
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/companies">Browse Companies</Link>
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          </div>
        </nav>
        <div className="hero-section">
          <h1 className="hero-title">Find the Perfect Job For You</h1>
          <p className="hero-subtitle">
            Explore thousands of job opportunities from the best companies.
          </p>
        </div>
      </header>

      <div className="search-section">
        <input type="text" placeholder="Search With Keyword" className="search-bar" />
        <button className="search-btn">Search</button>
      </div>

      <div className="stats">
        <p><strong>1000+</strong> Established Companies</p>
        <p><strong>8000+</strong> Jobs on the Platform</p>
      </div>

      <div className="button-section">
        {/* Link to Student Portal */}
        <Link to="/student-portal">
          <button className="action-btn">Student Portal</button>
        </Link>

        {/* Link to College Portal (updated from Student Dashboard) */}
        <Link to="/college-portal">
          <button className="action-btn">College Portal</button>
        </Link>

        {/* Link to Company Portal */}
        <Link to="/company-portal">
          <button className="action-btn">Company Portal</button>
        </Link>
      </div>

      <footer className="home-footer">
        <h3>Companies we help to grow:</h3>
        <div className="company-logos">
          <span className="company">Yahoo</span>
          <span className="company">Stripe</span>
          <span className="company">Siemens</span>
          <span className="company">Intel</span>
          <span className="company">Google</span>
        </div>
      </footer>

      <div className="career-connector">
        <Link to="/contact">
          <button className="contact-btn">Career Connector</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
