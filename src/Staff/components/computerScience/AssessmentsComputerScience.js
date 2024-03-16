// AssessmentsComputerScience.js

import React, { useState } from 'react';
import './AssessmentsComputerScience.css';

const AssessmentsComputerScience = () => {
  const [formTitle, setFormTitle] = useState('');
  const [formLink, setFormLink] = useState('');
  const [formDateTime, setFormDateTime] = useState('');
  const [formCards, setFormCards] = useState([]);
  const [linkError, setLinkError] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (formTitle.trim() !== '' && formDateTime.trim() !== '') {
      if (!validateLink(formLink)) {
        setLinkError('Invalid link format. Please enter a valid link.');
        return;
      }

      const currentDate = new Date();
      const creationDateTime = currentDate.toLocaleString();

      const newFormCard = {
        title: formTitle,
        link: formLink,
        dateTime: formDateTime,
        creationDateTime: creationDateTime,
      };

      setFormCards([...formCards, newFormCard]);

      // Clear form fields and error
      setFormTitle('');
      setFormLink('');
      setFormDateTime('');
      setLinkError('');
    }
  };

  const validateLink = (link) => {
    // Regular expression for a simple URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(link);
  };

  return (
    <div className="assessments-wrapper">
      <h2 className="assessments-title">Upload Assessment Form</h2>
      <form className="assessments-form" onSubmit={handleFormSubmission}>
        <label className="assessments-label" htmlFor="formTitle">
          Form Title:
        </label>
        <input
          className="assessments-input"
          type="text"
          id="formTitle"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          required
        />

        <label className="assessments-label" htmlFor="formLink">
          Form Link:
        </label>
        <input
          className={`assessments-input ${linkError ? 'invalid' : ''}`}
          type="text"
          id="formLink"
          value={formLink}
          onChange={(e) => {
            setFormLink(e.target.value);
            setLinkError(''); // Clear the error when the user starts typing
          }}
          required
        />
        {linkError && <p className="assessments-error">{linkError}</p>}

        <label className="assessments-label" htmlFor="formDateTime">
          Due :
        </label>
        <input
          className="assessments-input"
          type="datetime-local"
          id="formDateTime"
          value={formDateTime}
          onChange={(e) => setFormDateTime(e.target.value)}
          required
        />

        <button className="assessments-button" type="submit">
          Upload Assessment
        </button>
      </form>

      {formCards.map((formCard, index) => (
        <div key={index} className="assessments-card">
            <p className="assessments-card-description">
            Created on: {formCard.creationDateTime}
          </p>
          <h3 className="assessments-card-title">{formCard.title}</h3>
          <p className="assessments-card-currentdate">
            Due : {formCard.dateTime}
          </p>
          
          <a
            className="assessments-card-link"
            href={formCard.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Assessment
          </a>
        </div>
      ))}
    </div>
  );
};

export default AssessmentsComputerScience;
