import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App2.css';
import { FaBars, FaSearch, FaSignOutAlt, FaUser, FaBell, FaHome, FaClock, FaBookOpen, FaCog, FaQuestion } from 'react-icons/fa';
import StudentDetails from './StudentDetails';
import Timetable from './Timetable';
import Syllabus from './syllabus'; 
import homeImage from './assests/home.jpeg';
import Notification from './Notification'; 
import SyllabusComputerScience from './syllabusComputerScience';
import Notes from "./Notes";
import Videos from './Videos';
import Assessment from "./Assessment";
import levelup from './assests/levelup.jpeg'; // Import your logo imageC:\Users\HAI\OneDrive\Documents\Levelup\my-react-app\src\assests\LOGO(New).jpeg

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileBox = () => {
    setIsProfileBoxOpen(!isProfileBoxOpen);
  };

  return (
    
      <div className="App">
        <header className="header">
          <div className="header-item" onClick={toggleSidebar}>
             
            <FaBars style={{ color: '#00668c', fontSize: '24px' }} />
          </div>
          <div className="header-center">
       
        <img src={levelup} alt="Level Up Logo" className="company-logo" />
        <span className="company-name">LEVEL UP</span>
      </div>
          
          <div className="header-item">
            <Link to="/App2/notification" className="notification-
            
            link"> {/* Add this line for Notification */}
              <FaBell style={{ color: '#00668c', fontSize: '24px'}} />
            </Link>
            <div className="profile-icon-container" onClick={toggleProfileBox}>
              <FaUser style={{ color: '#00668c', fontSize: '24px', marginLeft: '30px'  }} />
              {isProfileBoxOpen && (
                <div className="profile-dropdown">
                  <Link to="/App2/student-details" className="profile-option">
                    <FaUser style={{ color: '#00668c', fontSize: '16px'}} />
                    <span>Profile</span>
                  </Link>
                  <hr className="profile-line" />
                  <div className="profile-option">
                    <FaSignOutAlt style={{ color: '#00668c', fontSize: '16px'}} />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/syllabus" element={<Syllabus />} /> {/* Add this line for Syllabus component */}
            <Route path="/notification" element={<Notification />} /> {/* Add this line for Notification component */}
            <Route path="/syllabusComputerScience" element={<SyllabusComputerScience />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/assessment" element={<Assessment />} />
          </Routes>
        </div>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <Link to="/App2" className="sidebar-item">
            <FaHome style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Home</span>
          </Link>
          <Link to="/App2/timetable" className="sidebar-item">
            <FaClock style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">TimeTable</span>
          </Link>
          <Link to="/App2/syllabus" className="sidebar-item"> 
            <FaBookOpen style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Syllabus</span>
          </Link>
         
        </div>
      </div>
   
  );
}

function HomePage() {
  return (
    <div className="centered-content">
      <img src={homeImage} alt="homeImage" />
      <p className="text-below-image"><h2>Let's get started!</h2></p>
    </div>
  );
}

export default App;
