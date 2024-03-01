// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Link to="/" className="sidebar-item">
        <FaHome style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Home</span>
      </Link>
      <Link to="/profile" className="sidebar-item">
        <FaUser style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Profile</span>
      </Link>
      <Link to="/notifications" className="sidebar-item">
        <FaBell style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Notifications</span>
      </Link>
      <div className="sidebar-item">
        <FaChartBar style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Dashboard</span>
      </div>
      <div className="sidebar-item">
        <FaSignOutAlt style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
