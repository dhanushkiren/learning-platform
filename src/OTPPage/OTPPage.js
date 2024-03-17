import React, { useState, useEffect, useRef } from 'react';
import './OTPPage.css'; // Import or create a CSS file for styling

function OTPPage() {
  const initialCountdown = 90;
  const [countdown, setCountdown] = useState(initialCountdown); // Initial countdown value in seconds
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']); // State to store individual OTP digits
  const [error, setError] = useState(''); // State to manage validation error
  const inputRefs = useRef([...Array(6)].map(() => React.createRef())); // Refs for input elements
  const dummyOTP = '123456'; // Dummy OTP for validation

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  // Handler function for Resend button
  const handleResend = () => {
    // Reset countdown to initial value
    setCountdown(initialCountdown);
    // Clear OTP digits
    setOtpDigits(['', '', '', '', '', '']);
    // Clear validation error
    setError('');
    // Focus on the first input box
    inputRefs.current[0].current.focus();
  };

  // Handler function for OTP input
  const handleOtpInputChange = (index, value) => {
    // Validate if the entered value is a number
    if (!/^\d*$/.test(value)) {
      // Show an alert message and clear the input
      alert('Please enter only numeric values for OTP.');
      value = '';
    }

    // Update individual digit in the OTP array
    setOtpDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;

      // Move focus to the next input box if available
      if (index < 5 && value !== '') {
        inputRefs.current[index + 1].current.focus();
      }

      return newDigits;
    });
  };

  // Handler function for Verify button
  const handleVerify = () => {
    // Check if exactly 6 digits are entered
    const enteredOTP = otpDigits.join('');
    if (enteredOTP.length === 6) {
      // Compare entered OTP with dummy OTP
      if (enteredOTP === dummyOTP) {
        // OTP verification successful
        setError('');
        // Navigate to the password-recovery page
        window.location.href = '/password-recovery';
      } else {
        // Show validation error for incorrect OTP
        setError('Invalid OTP. Please enter correct OTP.');
      }
    } else {
      // Show validation error for incomplete OTP
      setError('Please enter a 6-digit OTP.');
    }
  };

  return (
    <div className="otp-container">
      <div className="gradient-background">
        <div className="center-container">
          <h2>We have sent you a One Time Password to your email</h2>
          <h3>Please Enter OTP</h3>
          <h5>{formatTime(countdown)}</h5>
          <div className="otp-input-container">
            {/* Map through each digit and create a small input */}
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpInputChange(index, e.target.value)}
                ref={inputRefs.current[index]}
              />
            ))}
          </div>
          {/* Display validation error message */}
          {error && <p className="error">{error}</p>}
          <div className="button-container">
            <button className="resend-button" onClick={handleResend}>
              Resend
            </button>
            <button className="verify-button" onClick={handleVerify} disabled={otpDigits.join('').length !== 6}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
