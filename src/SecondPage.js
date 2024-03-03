// SecondPage.js
import React from 'react';
import './SecondPage.css'; // Make sure the correct path is provided
import SecondPageImage from './assets/secondbg.jpeg';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div className="app-container">
      <div className="left-section">
        <right>
          <h2>We’re so glad to have you on board!</h2>
          <h4>Discover the power of learning from anywhere, anytime</h4>
        </right>
        <img src={SecondPageImage} alt="" className="left-section-image" />
      </div>
      <div className="right-section">
        {/* Content for the right section */}
        <div className="login-container">
          <div className="inner-container">
          <h1>LOGIN</h1>
            <form className="login-form">
              <input className="login-input" type="text" placeholder="Email" />
              <input className="login-input" type="password" placeholder="Password" />
              <button type="submit" className="login-button">Login</button>
            </form>

            <div className="forgot-password">
              <p><Link to="/forgot-password">Forget Password?</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
