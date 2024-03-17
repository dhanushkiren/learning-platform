import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Link to="/App3" className="sidebar-item">
        <FaHome style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Home</span>
      </Link>
      
      <Link to="/App3/admin-dashboard" className="sidebar-item"> {/* Added Link to AdminDashboard */}
        <FaChartBar style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Dashboard</span>
      </Link>

      <div className="sidebar-item">
        <FaSignOutAlt style={{ color: '#00668c', fontSize: '24px' }} />
        <span className="sidebar-item-name">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
