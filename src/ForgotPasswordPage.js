// ForgotPasswordPage.js
import React from 'react';
import './ForgotPasswordPage.css';
import fpbgImage from './assets/fpbg.jpeg';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  return (
    <div className="app-container">
      <div className="left-section">
        <right>
          <h2>Welcome back!</h2>
        </right>
        <img src={fpbgImage} alt="" className="left-section-image" />
      </div>
      <div className="right-section">
      <div className="inner-container">
        <h1><center>FORGET PASSWORD?</center></h1>
        <h3>Enter the email address associated with your account</h3>
        <input type="text" placeholder="Enter Email Address" className="email-input" />
        <Link to="/otp">
        <center><button className="next-button">Next</button></center>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default ForgotPasswordPage;
