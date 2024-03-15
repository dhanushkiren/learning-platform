import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import { FaBars, FaSearch, FaSignOutAlt, FaUser, FaBell, FaChartBar, FaHome } from 'react-icons/fa';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Column from './ResusableComponents/column';

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
    <div>
    {/* <Router> */}
      <div className="App">
        <header className="header">
          <div className="header-item" onClick={toggleSidebar}>
            <FaBars style={{ color: '#00668c', fontSize: '24px' }} />
          </div>
          <div className="header-item">
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-box" />
              <div className="search-icon-container">
                <FaSearch style={{ color: 'white', fontSize: '20px' }} />
              </div>
            </div>
          </div>
          <div className="header-item">
            <div className="profile-icon-container" onClick={toggleProfileBox}>
              <FaUser style={{ color: '#00668c', fontSize: '24px', marginLeft: '30px'  }} />
              {isProfileBoxOpen && (
                <div className="profile-dropdown">
                  <Link to="/student-details" className="profile-option">
                    <FaHome style={{ color: '#00668c', fontSize: '16px'}} />
                    <span>Profile</span>
                  </Link>
                  <hr className="profile-line" />
                  <div className="profile-option">
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-item">
            <FaHome style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Home</span>
          </div>
          <div className="sidebar-item">
            <FaUser style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">TimeTable</span>
          </div>
          <div className="sidebar-item">
            <FaBell style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Syllabus</span>
          </div>
          <div className="sidebar-item">
            <FaChartBar style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Settings</span>
          </div>
          <div className="sidebar-item">
            <FaSignOutAlt style={{ color: '#00668c', fontSize: '24px'}} />
            <span className="sidebar-item-name">Help</span>
          </div>

        </div>
      </div>
    {/* </Router> */}
    <div >
    </div>
  <AdminDashboard/>
 </div>
  );
}
export default App;