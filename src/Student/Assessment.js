// Assessment.js
import React from "react";
import "./Assessment.css";
const Assessment = () => {
  // Sample assessment links (replace with your actual links)
  const assessmentLinks = [
    { title: "Assessment 1", url: "https://example.com/assessment1", description: "Description of Assessment 1" },
    { title: "Assessment 2", url: "https://example.com/assessment2", description: "Description of Assessment 2" },
    { title: "Assessment 3", url: "https://example.com/assessment3", description: "Description of Assessment 3" }
  ];

  return (
    <div>
      <center><h2 className="assessment-title">Assessment Page</h2></center>
      <div className="assessment-row">
        {assessmentLinks.map((link, index) => (
          <div className="assessment-col" key={index}>
            <div className="assessment-card">
              <div className="assessment-card-body">
                <h5 className="assessment-card-title">{link.title}</h5>
                <p className="assessment-card-text">{link.description}</p>
                <a href={link.url} target="_blank" className="assessment-btn btn-primary">Open in New Tab</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
