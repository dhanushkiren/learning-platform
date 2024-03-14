import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClock, FaBook } from 'react-icons/fa'; // Removed FaBell import

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Link to="/App1" className="sidebar-item">
        <FaHome style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Home</span>
      </Link>
      <Link to="/App1/timetable" className="sidebar-item">
        <FaClock style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Timetable</span>
      </Link>
      <Link to="/App1/subjects" className="sidebar-item">
        <FaBook style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Subjects</span>
      </Link>
      {/* Removed notification link */}
    </div>
  );
};

export default Sidebar;
