import React, { useState } from 'react';
import './ForgotPasswordPage.css';
import fpbgImage from '../assets/fpbg.jpeg';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Clear error message when the user starts typing
    setError('');
  };

  const handleNext = () => {
    const allowedEmails = ['student@gmail.com', 'staff@gmail.com', 'admin@gmail.com'];
    if (allowedEmails.includes(email.trim().toLowerCase())) {
      // Navigate to OTP page if the email is allowed
      window.location.href = '/otp'; // Navigate to OTP page
    } else {
      // Display validation error if the email is not allowed
      setError("Please enter a valid email address.");
    }
  };

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
          <input type="text" placeholder="Enter Email Address" className="email-input" value={email} onChange={handleEmailChange} />
          {/* Display validation error message */}
          {error && <p className="error">{error}</p>}
          <center>
            <button className="next-button" onClick={handleNext}>Next</button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
