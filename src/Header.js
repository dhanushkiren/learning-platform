// Header.js

import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import logo from './assets/logo.jpeg';

const Header = ({ toggleSidebar }) => {
  return (
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
        <img src={logo} alt="Company Logo" style={{ width: '60px', height: '60px', marginLeft: '30px' }} />
      </div>
    </header>
  );
};

export default Header;
