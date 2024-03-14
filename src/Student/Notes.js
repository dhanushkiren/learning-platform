//notes.js
import React, { useState } from 'react';
import './Notes.css'; 
import pdfFile from './assests/PGP_Algorithms.pdf';

const Notes = () => {
  const [expanded, setExpanded] = useState(false);

  const handleContainerClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className={`notes-container ${expanded ? 'expanded' : ''}`} 
      onClick={handleContainerClick}
    >
      <h2 className="notes-title">PGP_Algorithms</h2>
      <div className="notes-content">
        <embed src={pdfFile} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Notes;
