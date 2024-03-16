import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App1.css';
import Header from './Headerstaff/Header';
import Sidebar from './Sidebarstaff/Sidebar';
import CenteredImage from './Homestaff/CenteredImage';
import Subjects from './Subjectstaff/Subjects';
import Notification from './Notificationstaff/Notification';
import SyllabusComputerScience from './components/computerScience/SyllabusComputerScience';
import VideosComputerScience from './components/computerScience/VideosComputerScience';
import AssessmentsComputerScience from './components/computerScience/AssessmentsComputerScience';
import NotesComputerScience from './components/computerScience/NotesComputerScience';
import Profile from './Profilestaff/profile';
import Timetable from './Timetablestaff/Timetable';

function Home1() {
  return (
    <div className="content">
      <CenteredImage />
    </div>
  );
}

function App1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <button
        className={`sidebar-toggle ${isSidebarOpen ? 'open' : 'close'}`}
        onClick={toggleSidebar}
      >
        
      </button>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects/*" element={<Subjects />} />
        <Route path="/notifications" element={<Notification />} />
        {/* Dynamic routes for Computer Science */}
        <Route path="/subjects/Computer Science/syllabus" element={<SyllabusComputerScience />} />
        <Route path="/subjects/Computer Science/videos" element={<VideosComputerScience />} />
        <Route path="/subjects/Computer Science/assessments" element={<AssessmentsComputerScience />} />
        <Route path="/subjects/Computer Science/notes" element={<NotesComputerScience />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </div>
  );
}

export default App1;