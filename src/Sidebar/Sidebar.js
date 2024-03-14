import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../StudentPage/StudentPage.css';
import { FaBars, FaSearch, FaSignOutAlt, FaUser, FaBell, FaHome, FaClock, FaBookOpen, FaCog, FaQuestion } from 'react-icons/fa';
//import StudentDetails from './StudentDetails';
//import Timetable from './Timetable';
function Sidebar() {
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
                <div className="header-item">
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-box" />
                        <div className="search-icon-container">
                            <FaSearch style={{ color: 'white', fontSize: '20px' }} />
                        </div>
                    </div>
                </div>
                <div className="header-item">
                    <Link to="/Home/notification" className="notification-link">
                        <FaBell style={{ color: '#00668c', fontSize: '24px' }} />
                    </Link>
                    <div className="profile-icon-container" onClick={toggleProfileBox}>
                        <FaUser style={{ color: '#00668c', fontSize: '24px', marginLeft: '30px' }} />
                        {isProfileBoxOpen && (
                            <div className="profile-dropdown">
                                <Link to="/student-details" className="profile-option">
                                    <FaUser style={{ color: '#00668c', fontSize: '16px' }} />
                                    <span>Profile</span>
                                </Link>
                                <hr className="profile-line" />
                                <div className="profile-option">
                                    <FaSignOutAlt style={{ color: '#00668c', fontSize: '16px' }} />
                                    <span>Logout</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Link to="/Home" className="sidebar-item">
                    <FaHome style={{ color: '#00668c', fontSize: '24px' }} />
                    <span className="sidebar-item-name">Home</span>
                </Link>
                <Link to="/Home/notification" className="sidebar-item">
                    <FaClock style={{ color: '#00668c', fontSize: '24px' }} />
                    <span className="sidebar-item-name">TimeTable</span>
                </Link>
                <Link to="/syllabus" className="sidebar-item">
                    <FaBookOpen style={{ color: '#00668c', fontSize: '24px' }} />
                    <span className="sidebar-item-name">Syllabus</span>
                </Link>
                <div className="sidebar-item">
                    <FaCog style={{ color: '#00668c', fontSize: '24px' }} />
                    <span className="sidebar-item-name">Settings</span>
                </div>
                <div className="sidebar-item">
                    <FaQuestion style={{ color: '#00668c', fontSize: '24px' }} />
                    <span className="sidebar-item-name">Help</span>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;