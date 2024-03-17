import React, { useState, useEffect } from 'react';
import './AddStaff.css';

function StaffCard({ staff }) {
  const {
    profilePhoto,
    name,
    department,
    email,
    phoneNo,
    address,
    username,
    password,
  } = staff;

  return (
    <div className="staff-card">
      <img src={profilePhoto} alt="Profile" />
      <h3>{name}</h3>
      <p><strong>Department:</strong>&nbsp;{department}</p>
      <p><strong>Email:</strong>&nbsp;&nbsp;&nbsp;&nbsp;{email}</p>
      <p><strong>Phone No:</strong>&nbsp;{phoneNo}</p>
      <p><strong>Address:</strong>&nbsp;{address}</p>
      <p><strong>Username:</strong>&nbsp;{username}</p>
      <p><strong>Password:</strong>&nbsp;{password}</p>
    </div>
  );
}

function AddStaff() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [staffMembers, setStaffMembers] = useState(() => {
    const storedStaff = localStorage.getItem('staff');
    return storedStaff ? JSON.parse(storedStaff) : {
      'Computer Science': [],
      'Maths': [],
      'Sociology': [],
    };
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    profilePhoto: '',
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    username: '',
    password: '',
    department: '',
  });

  // Validation state
  const [validationErrors, setValidationErrors] = useState({
    profilePhoto: '',
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    username: '',
    password: '',
    department: '',
  });

  useEffect(() => {
    localStorage.setItem('staff', JSON.stringify(staffMembers));
  }, [staffMembers]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setIsCardVisible(false);
  };

  const handleSelectButtonClick = () => {
    setIsCardVisible(true);
  };

  const handleAddStaff = () => {
    setIsFormOpen(true);
    setNewStaff({
      ...newStaff,
      department: '',
      address: '',
      email: '',
      password: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    Object.keys(newStaff).forEach((field) => {
      if (!newStaff[field].trim()) {
        isValid = false;
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (isValid && !/^[a-zA-Z]+$/.test(newStaff.name)) {
      isValid = false;
      errors.name = 'Name should contain only alphabets';
    }

    if (isValid && !/\S+@\S+\.\S+/.test(newStaff.email)) {
      isValid = false;
      errors.email = 'Invalid email address';
    }

    if (isValid && !/^\d{10}$/.test(newStaff.phoneNo)) {
      isValid = false;
      errors.phoneNo = 'Phone number should contain 10 numbers only';
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setStaffMembers((prevStaff) => {
        const updatedStaff = { ...prevStaff };
        
        if (!updatedStaff[selectedDepartment]) {
          updatedStaff[selectedDepartment] = [];
        }
  
        updatedStaff[selectedDepartment].push({ ...newStaff, department: selectedDepartment });
  
        return updatedStaff;
      });
  
      setIsFormOpen(false);
      setNewStaff({
        profilePhoto: '',
        name: '',
        email: '',
        phoneNo: '',
        address: '',
        username: '',
        password: '',
        department: '',
      });
      setValidationErrors({});
    }
  };
  
  const handleFormCancel = () => {
    setIsFormOpen(false);
    setNewStaff({
      profilePhoto: '',
      name: '',
      email: '',
      phoneNo: '',
      address: '',
      username: '',
      password: '',
      department: '',
    });
    setValidationErrors({});
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStaff({ ...newStaff, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-staff">
      <h2>Add Staff</h2>

      <div className="department-dropdown">
        <label htmlFor="selectDepartment">Select Department:</label>
        <select id="selectDepartment" value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Maths">Maths</option>
          <option value="Sociology">Sociology</option>
        </select>
      </div>

      <div className="button-container">
        <button onClick={handleSelectButtonClick} disabled={!selectedDepartment}>
          Select
        </button>

        <button onClick={handleAddStaff} disabled={!selectedDepartment}>
          Add More Staff
        </button>
      </div>

      {isCardVisible && staffMembers[selectedDepartment] && (
  <div className="staff-list">
    {staffMembers[selectedDepartment].map((staff, index) => (
      <StaffCard key={index} staff={staff} />
    ))}
  </div>
)}

      {isFormOpen && (
        <div className="staff-form">
          <h3>Add New Staff</h3>
          <label htmlFor="profilePhoto">Profile Photo:</label>
          <input type="file" id="profilePhoto" accept="image/*" onChange={handleProfilePhotoChange} />
          <span className="error">{validationErrors.profilePhoto}</span>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
          />
          <span className="error">{validationErrors.name}</span>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={newStaff.email}
            onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
          />
          <span className="error">{validationErrors.email}</span>

          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            value={newStaff.phoneNo}
            onChange={(e) => setNewStaff({ ...newStaff, phoneNo: e.target.value })}
          />
          <span className="error">{validationErrors.phoneNo}</span>

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={newStaff.address}
            onChange={(e) => setNewStaff({ ...newStaff, address: e.target.value })}
          />
          <span className="error">{validationErrors.address}</span>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={newStaff.username}
            onChange={(e) => setNewStaff({ ...newStaff, username: e.target.value })}
          />
          <span className="error">{validationErrors.username}</span>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={newStaff.password}
            onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
          />
          <span className="error">{validationErrors.password}</span>

          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={newStaff.department}
            onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}
          />
          <span className="error">{validationErrors.department}</span>
          <br></br>
          <button onClick={handleFormSubmit}>Submit</button>
          <button onClick={handleFormCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default AddStaff;
