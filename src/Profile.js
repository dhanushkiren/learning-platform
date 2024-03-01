// Profile.js

import React, { useState } from 'react';
import './Profile.css';
import { FaEdit, FaUser } from 'react-icons/fa';

const Profile = () => {
  // State to track if the details are in edit mode
  const [isEditMode, setIsEditMode] = useState(false);
  // State to track changes in input fields
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("******");

  // Function to toggle between read-only and edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // Function to handle changes in input fields
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleSave = () => {
    // Perform save logic here (e.g., API call, updating state, etc.)
    // For now, let's just log the changes
    console.log('Saving Changes:', { name, email, password });
    setIsEditMode(false); // Exit edit mode after saving
  };

  return (
    <div>
      <div className="profile-icon">
        <FaUser className="user-icon" />
      </div>
      <div className="admin-profile">
        <div className="profile-header">
          <h2 className="profile-title">ADMIN PROFILE</h2>
        </div>
        <div className="profile-info">
          {/* Admin details */}
          <div className="info-item">
            <span className="info-label">Name:</span>
            {/* Render input field or span based on edit mode */}
            {isEditMode ? (
              <input
                type="text"
                className="info-value"
                value={name}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            ) : (
              <span className="info-value">{name}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            {isEditMode ? (
              <input
                type="text"
                className="info-value"
                value={email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            ) : (
              <span className="info-value">{email}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Password:</span>
            {isEditMode ? (
              <input
                type="password"
                className="info-value"
                value={password}
                onChange={(e) => handleInputChange(e, 'password')}
              />
            ) : (
              <span className="info-value">{password}</span>
            )}
          </div>
          {/* Add more admin details as needed */}
        </div>
      </div>
      {/* Edit button outside the profile box */}
      <div className="edit-button-container">
        {isEditMode ? (
          <button className="edit-button" onClick={handleSave}>
            <FaEdit className="edit-icon" />
            <span>Save</span>
          </button>
        ) : (
          <button className="edit-button" onClick={toggleEditMode}>
            <FaEdit className="edit-icon" />
            <span>Edit</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
