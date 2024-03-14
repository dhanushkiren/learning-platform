//syllabusComputerScience.js
import React from 'react';
import './syllabusComputerScience.css';
import syllabusImage from './assests/syllabus.jpeg';

const SyllabusComputerScience = () => {
  return (
    <div className="syllabus-container">
      <h2>Syllabus Uploaded</h2>
      <div className="file-preview">
        <img src={syllabusImage} alt="Syllabus" className="syllabus" />
      </div>
    </div>
  );
};

export default SyllabusComputerScience;
