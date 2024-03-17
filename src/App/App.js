// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loginBgImage from '../assets/loginbg.jpeg';
import SecondPage from '../SecondPage/SecondPage';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import OTPPage from '../OTPPage/OTPPage';
import PasswordRecoveryPage from '../PasswordRecoveryPage/PasswordRecoveryPage'
import StudentPage from '../StudentPage/StudentPage';

import Login from '../Login/Login'; // Import the Login component
import Home from '../Home/Home';
import App1 from '../Staff/App1';
import App2 from '../Student/App2';
import App3 from '../Admin/App3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/App2/*" element={<App2 />} />
        <Route path="/App1/*" element={<App1 />} />
        <Route path="/App3/*" element={<App3 />} />
      </Routes>
    </Router>
  );
}

export default App;
