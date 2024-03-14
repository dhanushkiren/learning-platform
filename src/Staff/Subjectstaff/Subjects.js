// Subjects.js

import React, { useState, useEffect } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Subjects.css';
import adminhomeimage from '../assets/adminhomeimage.jpeg';

const Subjects = () => {
  const [subjects, setSubjects] = useState(() => {
    const storedSubjects = localStorage.getItem('subjects');
    return storedSubjects ? JSON.parse(storedSubjects) : [];
  });

  const [newSubject, setNewSubject] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const saveSubjectsToLocalStorage = (updatedSubjects) => {
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubjectCreation = (e) => {
    e.preventDefault();
    if (newSubject.trim() !== '' && !subjects.includes(newSubject)) {
      const updatedSubjects = [...subjects, newSubject];
      setSubjects(updatedSubjects);
      setSelectedSubject(newSubject);
      setNewSubject('');
      setIsFormVisible(false);
      saveSubjectsToLocalStorage(updatedSubjects);
    }
  };

  const handleSubjectClose = (subject) => {
    const updatedSubjects = subjects.filter((s) => s !== subject);
    setSubjects(updatedSubjects);
    saveSubjectsToLocalStorage(updatedSubjects);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleAddSubjectButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleOptionClick = (option) => {
    if (selectedSubject) {
      const lowerCaseOption = option.toLowerCase();
      navigate(`/App1/subjects/${selectedSubject}/${lowerCaseOption}`);
    }
  };

  return (
    <div className="subjects-container">
      <div className="dropdown-container">
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedSubject ? selectedSubject : 'Select a Subject'}
            <span className="dropdown-arrow">&#9660;</span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="dropdown-item"
                  onClick={() => handleSubjectSelect(subject)}
                >
                  {subject}
                  <span className="close-button" onClick={() => handleSubjectClose(subject)}>
                    X
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="create-subject-button-container">
          <button className="add-subject-button" onClick={handleAddSubjectButtonClick}>
            <RiAddLine />
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src={adminhomeimage} alt="Description of the image" />
      </div>

      {isFormVisible && (
        <div className="create-subject-form">
          <form onSubmit={handleSubjectCreation}>
            <input
              type="text"
              placeholder="Enter subject name"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      )}
      {selectedSubject && (
        <div className="options-box">
          <h3>Options for {selectedSubject}</h3>
          <div className="card-container">
            <div className="card" onClick={() => handleOptionClick('Syllabus')}>
              Syllabus
            </div>
            <div className="card" onClick={() => handleOptionClick('Videos')}>
              Videos
            </div>
            <div className="card" onClick={() => handleOptionClick('Assessments')}>
              Assessments
            </div>
            <div className="card" onClick={() => handleOptionClick('Notes')}>
              Notes
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjects;
