// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import loginBgImage from '../assets/loginbg.jpeg';

function HomePage() {
  return (
    <div className="app-container">
      <div className="left-section">
        <img src={loginBgImage} alt="" className="left-section-image" />
      </div>
      <div className="right-section">
        <h2 className="section-title">Let’s get started!</h2>
        <h4 className="section-subtitle">Uncover the hidden gems of knowledge in the digital realm</h4>
        <div className="centered-button">
          <Link to="/second">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
