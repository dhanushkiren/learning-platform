import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./syllabus.css"; 
import SyllabusComputerScience from "./syllabusComputerScience";
import Notes from "./Notes";
import Videos from "./Videos";
import Assessment from "./Assessment";


const SyllabusCard = ({ content }) => {
    let destination = "/";
    if (content.title === "Notes") {
      destination = "/App2/notes";
    } else if (content.title === "Videos") {
      destination = "/App2/videos";
    } else if (content.title === "Syllabus") {
      destination = "/App2/syllabusComputerScience";
    } else if (content.title === "Assessments") { // Add condition for Assessments
      destination = "/App2/assessment";
    }
  
    return (
      <Link to={destination} className="card-link">
        <div className="card">
          <h2>{content.title}</h2>
        </div>
      </Link>
    );
  };
const SubjectDetailsCard = ({ subjectDetails }) => {
  return (
    <div className="rectangular-card">
      <h2>{subjectDetails.subjectName}</h2>
      <p>Faculty in Charge: {subjectDetails.facultyInCharge}</p>
      <p>Subject Code: {subjectDetails.subjectCode}</p>
    </div>
  );
};

function App() {
  const [selectedSubject, setSelectedSubject] = useState("ComputerScience"); 

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const cardContents = {
    ComputerScience: [
      { title: "Syllabus" },
      { title: "Notes"},
      { title: "Videos"},
      { title: "Assessments"}
    ],
    subject2: [
      { title: "Syllabus" },
      { title: "Notes" },
      { title: "Videos" },
      { title: "Assessments" }
    ],
    subject3: [
      { title: "Syllabus"},
      { title: "Notes" },
      { title: "Videos" },
      { title: "Assessments" }
    ],
    subject4: [
      { title: "Syllabus"},
      { title: "Notes" },
      { title: "Videos" },
      { title: "Assessments" }
    ],
    subject5: [
      { title: "Syllabus"},
      { title: "Notes"},
      { title: "Videos" },
      { title: "Assessments"}
    ]
  };

  const subjectDetails = {
    ComputerScience: {
      subjectName: "Computer Science",
      facultyInCharge: "John Doe",
      subjectCode: "SUB001"
    },
    subject2: {
      subjectName: "Subject 2",
      facultyInCharge: "Jane Smith",
      subjectCode: "SUB002"
    },
    subject3: {
      subjectName: "Subject 3",
      facultyInCharge: "Janani",
      subjectCode: "SUB003"
    },
    subject4: {
      subjectName: "Subject 4",
      facultyInCharge: "Smith",
      subjectCode: "SUB004"
    },
    subject5: {
      subjectName: "Subject 5",
      facultyInCharge: "Jane",
      subjectCode: "SUB005"
    }
  };

  return (
    <div className="app">
      <div className="container">
        <select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="ComputerScience">ComputerScience</option>
          <option value="subject2">Subject 2</option>
          <option value="subject3">Subject 3</option>
          <option value="subject4">Subject 4</option>
          <option value="subject5">Subject 5</option>
        </select>
      </div>
      {selectedSubject && (
        <div className="rectangular-card-container">
          <SubjectDetailsCard subjectDetails={subjectDetails[selectedSubject]} />
        </div>
      )}
      <div className="cards-container">
        {selectedSubject &&
          cardContents[selectedSubject].map((content, index) => (
            <SyllabusCard key={index} content={content} />
          ))}
      </div>
      <Routes>
        <Route path="/syllabusComputerScience" element={<SyllabusComputerScience />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/assessment" element={<Assessment />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
