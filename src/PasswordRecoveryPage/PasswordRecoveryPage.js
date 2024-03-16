// PasswordRecoveryPage.js
import React from 'react';
import './PasswordRecoveryPage.css';
import recoveryBgImage from '../assets/fgp.jpeg'; // Import the new background image

function PasswordRecoveryPage() {
  return (
    <div className="recovery-container" style={{ backgroundImage: `url(${recoveryBgImage})` }}>
      <div className="recovery-content">
        <h2>Password Recovery</h2>
        <p>Enter your new password below:</p>
        <form>
          <label>New Password:</label>
          <input type="password" />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordRecoveryPage;
