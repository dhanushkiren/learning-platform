import React, { useState } from 'react';
import '../SecondPage/SecondPage.css';
import SecondPageImage from '../assets/secondbg.jpeg';
import { Link } from 'react-router-dom';

function SecondPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Dummy credentials for student, staff, and admin
  const studentCredentials = { username: 'student@gmail.com', password: 'student123' };
  const staffCredentials = { username: 'staff@gmail.com', password: 'staff123' };
  const adminCredentials = { username: 'admin@gmail.com', password: 'admin123' };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Reset previous errors
    setEmailError('');
    setPasswordError('');

    if (email === studentCredentials.username && password === studentCredentials.password) {
      // Navigate to the student page if credentials are correct
      window.location.href = '/App2';
    } else if (email === staffCredentials.username && password === staffCredentials.password) {
      // Navigate to the staff page if credentials are correct
      window.location.href = '/App1';
    } else if (email === adminCredentials.username && password === adminCredentials.password) {
      // Navigate to the admin page if admin credentials are correct
      window.location.href = '/adminPage'; // Change the URL to the admin page
    } else {
      // Display validation error if credentials are incorrect
      if (email !== studentCredentials.username && email !== staffCredentials.username && email !== adminCredentials.username) {
        setEmailError('Invalid email address.');
      }
      if (password !== studentCredentials.password && password !== staffCredentials.password && password !== adminCredentials.password) {
        setPasswordError('Invalid password.');
      }
    }
  };

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
        <div className="login-container">
          <div className="inner-container">
            <h1>LOGIN</h1>
            <form className="login-form" onSubmit={handleLogin}>
              <input
                className="login-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>

            <div className="forgot-password">
              <p>
                <Link to="/forgot-password">Forget Password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
