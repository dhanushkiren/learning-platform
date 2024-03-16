import React, { useState, useEffect } from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa"; // Import correct icons from react-icons library
import "./StudentDetails.css"; // Import CSS file for Profile styles

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetMode, setResetMode] = useState(false);

  // Load user data from localStorage when component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);

    const savedRegistrationNumber = localStorage.getItem("registrationNumber");
    if (savedRegistrationNumber) setRegistrationNumber(savedRegistrationNumber);

    const savedDepartment = localStorage.getItem("department");
    if (savedDepartment) setDepartment(savedDepartment);

    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);

    const savedPassword = localStorage.getItem("password");
    if (savedPassword) setPassword(savedPassword);
  }, []);

  // Update localStorage when data changes
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("registrationNumber", registrationNumber);
    localStorage.setItem("department", department);
    localStorage.setItem("email", email);
    
  }, [name, registrationNumber, department, email]);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleResetClick = () => {
    setResetMode(true);
    setIsEditMode(false);
    setNewPassword(""); // Set newPassword to current password
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setPassword(newPassword); // Update the password state variable with the new password
    localStorage.setItem("password", newPassword); // Save new password to localStorage
    setResetMode(false);
    alert("Password has been reset.");
  };


  const handleSaveClick = () => {
    setIsEditMode(false);
    if (newPassword && newPassword === confirmPassword) {
      setPassword(newPassword); // Update password if a new password was entered and confirmed
      localStorage.setItem("password", newPassword); // Save new password to localStorage
    }
    alert("Profile saved successfully.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageUpload = (event) => {
    // Handle image upload logic here
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`student-profile ${isEditMode ? "edit-mode" : ""}`}>
      <div className="profile-info">
        {/* Profile Icon */}
        <div className="profile-icon">
          <label htmlFor="image-upload" className="upload-icon">
            <FaPlus />
            <input
              type="file"
              id="image-upload"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </label>
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="icon circle" />
          ) : (
            <FaUserCircle className="icon" />
          )}
        </div>
        {/* Student details */}
        <div className="info-item">
          <span className="info-label">Name:</span>
          {isEditMode ? (
            <input
              type="text"
              className="info-value"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span className="info-value">{name}</span>
          )}
        </div>
        <div className="info-item">
          <span className="info-label">Registration Number:</span>
          {isEditMode ? (
            <input
              type="text"
              className="info-value"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          ) : (
            <span className="info-value">{registrationNumber}</span>
          )}
        </div>
        <div className="info-item">
          <span className="info-label">Department:</span>
          {isEditMode ? (
            <input
              type="text"
              className="info-value"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          ) : (
            <span className="info-value">{department}</span>
          )}
        </div>
        <div className="info-item">
          <span className="info-label">Email:</span>
          {isEditMode ? (
            <input
              type="text"
              className="info-value"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span className="info-value">{email}</span>
          )}
        </div>
        {resetMode && (
          <div className="info-item">
            <span className="info-label">New Password:</span>
            <input
              type="password"
              className="info-value"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        )}
        {resetMode && (
          <div className="info-item">
            <span className="info-label">Confirm Password:</span>
            <input
              type="password"
              className="info-value"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        {!isEditMode && !resetMode && (
          <div className="info-item">
          <span className="info-label">Password:</span>
          <span className="info-value">{password}</span>
          <button className="reset-button" onClick={handleResetClick}>
            Reset
          </button>
        </div>
        )}
      </div>
      {(isEditMode || resetMode) && (
        <div className="edit-button-container">
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
      {!isEditMode && !resetMode && (
        <div className="edit-button-container">
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
      {isEditMode && !resetMode && (
        <div className="edit-button-container">
         
        </div>
      )}
    </div>
  );
};

export default Profile;
