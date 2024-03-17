import React, { useState } from 'react';
import './PasswordRecoveryPage.css';
import recoveryBgImage from '../assets/fgp.jpeg'; // Import the new background image
import { Link } from 'react-router-dom';

function PasswordRecoveryPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Clear error message when the user starts typing
    setError('');
  };

  const resetPassword = () => {
    if (password.trim() !== '') {
      // Navigate to the login page or perform any other action
      console.log("Password reset successful!"); // Placeholder action
    } else {
      // Password is empty, display validation error
      setError("Please enter a password.");
    }
  };

  return (
    <div className="recovery-container" style={{ backgroundImage: `url(${recoveryBgImage})` }}>
      <div className="recovery-content">
        <h2>Password Recovery</h2>
        <p>Enter your new password below:</p>
        <form>
          <label>New Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />

          {/* Display validation error if password is empty */}
          {error && <p className="error">{error}</p>}

          {/* Use a conditional rendering to enable/disable the Link based on password input */}
          {password.trim() !== '' ? (
            <Link to="/second">
              <button type="button" onClick={resetPassword}>Reset Password</button>
            </Link>
          ) : (
            <button type="button" onClick={resetPassword} disabled>Reset Password</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PasswordRecoveryPage;
