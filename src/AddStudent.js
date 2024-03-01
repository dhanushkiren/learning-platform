import React, { useState, useEffect } from 'react';
import './AddStudent.css';

function StudentCard({ student }) {
  const {
    profilePhoto,
    name,
    department,
    email,
    phoneNo,
    address,
    username,
    password,
  } = student;

  return (
    <div className="student-card">
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

function AddStudent() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : {
      'Computer Science': [],
      'Maths': [],
      'Sociology': [],
    };
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
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
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setIsCardVisible(false);
  };

  const handleSelectButtonClick = () => {
    setIsCardVisible(true);
  };

  const handleAddStudent = () => {
    setIsFormOpen(true);
    setNewStudent({
      ...newStudent,
      department: '',
      address: '',
      email: '',
      password: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    Object.keys(newStudent).forEach((field) => {
      if (!newStudent[field].trim()) {
        isValid = false;
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (isValid && !/^[a-zA-Z]+$/.test(newStudent.name)) {
      isValid = false;
      errors.name = 'Name should contain only alphabets';
    }

    if (isValid && !/\S+@\S+\.\S+/.test(newStudent.email)) {
      isValid = false;
      errors.email = 'Invalid email address';
    }

    if (isValid && !/^\d{10}$/.test(newStudent.phoneNo)) {
      isValid = false;
      errors.phoneNo = 'Phone number should contain 10 numbers only';
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setStudents((prevStudents) => ({
        ...prevStudents,
        [selectedDepartment]: [...prevStudents[selectedDepartment], { ...newStudent, department: selectedDepartment }],
      }));

      setIsFormOpen(false);
      setNewStudent({
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
    setNewStudent({
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
        setNewStudent({ ...newStudent, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>

      

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

        <button onClick={handleAddStudent} disabled={!selectedDepartment}>
          Add More Students
        </button>
      </div>

      {isCardVisible && (
        <div className="student-list">
          {students[selectedDepartment].map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      )}

      {isFormOpen && (
        <div className="student-form">
          <h3>Add New Student</h3>
          <label htmlFor="profilePhoto">Profile Photo:</label>
          <input type="file" id="profilePhoto" accept="image/*" onChange={handleProfilePhotoChange} />
          <span className="error">{validationErrors.profilePhoto}</span>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <span className="error">{validationErrors.name}</span>

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <span className="error">{validationErrors.email}</span>

          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            value={newStudent.phoneNo}
            onChange={(e) => setNewStudent({ ...newStudent, phoneNo: e.target.value })}
          />
          <span className="error">{validationErrors.phoneNo}</span>

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={newStudent.address}
            onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
          />
          <span className="error">{validationErrors.address}</span>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={newStudent.username}
            onChange={(e) => setNewStudent({ ...newStudent, username: e.target.value })}
          />
          <span className="error">{validationErrors.username}</span>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={newStudent.password}
            onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
          />
          <span className="error">{validationErrors.password}</span>

          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={newStudent.department}
            onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
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

export default AddStudent;
