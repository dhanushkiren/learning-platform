import React, { useState } from 'react';
import './SyllabusComputerScience.css';

const SyllabusComputerScience = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    setPdfFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();

    // Use FormData to handle file upload
    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    // Add logic here to send formData to your server for further processing (e.g., save to storage, database)

    // Clear the file input
    setPdfFile(null);
    setFileName('');
  };

  return (
    <div className="syllabus-container">
      <h2>Upload Syllabus</h2>
      <form onSubmit={handleUploadSubmit}>
        <label htmlFor="pdfFile" className="syllabus-label">
          Select a PDF file:
        </label>
        <div className="file-input-container">
          
          
          <input
            type="file"
            id="pdfFile"
            className="syllabus-input"
            accept=".pdf"
            onChange={handleUpload}
            required
          />
        </div>

        <button type="submit" className="syllabus-button">
          Upload Syllabus
        </button>
      </form>

      {pdfFile && (
        <div className="file-preview">
          <h3>File Preview</h3>
          <embed src={URL.createObjectURL(pdfFile)} type="application/pdf" />
        </div>
      )}
    </div>
  );
};

export default SyllabusComputerScience;
