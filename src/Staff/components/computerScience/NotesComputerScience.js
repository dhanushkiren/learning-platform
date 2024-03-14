// NotesComputerScience.js

import React, { useState, useEffect } from 'react';
import './NotesComputerScience.css';

const NotesComputerScience = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [newNoteFile, setNewNoteFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewNoteFile(file);
  };

  const handleNoteUpload = () => {
    if (newNoteFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newNoteCard = {
          content: event.target.result,
          timestamp: new Date().toLocaleString(),
        };

        setNotes([...notes, newNoteCard]);
        localStorage.setItem('notes', JSON.stringify([...notes, newNoteCard]));

        // Clear the file input and newNoteFile state
        setNewNoteFile(null);
      };

      // Read the content of the file as data URL
      reader.readAsDataURL(newNoteFile);
    }
  };

  return (
    <div className="notes-wrapper">
      <h2 className="notes-title">Upload Notes</h2>

      <input
        type="file"
        accept=".doc, .docx, .pdf"
        onChange={handleFileChange}
      />

      <button onClick={handleNoteUpload}>Upload Note</button>

      <div className="notes-cards-container">
        {notes.map((note, index) => (
          <div key={index} className="notes-card">
            <p className="notes-card-timestamp">{note.timestamp}</p>
            <iframe
              title={`note-${index}`}
              src={note.content}
              width="100%"
              height="600px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesComputerScience;
