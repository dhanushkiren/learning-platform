import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";

import levelup from '../assets/levelup.jpeg';


const Header = ({ toggleSidebar }) => {
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const toggleProfileBox = () => {
    setIsProfileBoxOpen(!isProfileBoxOpen);
  };

  return (
    <div className="header">
      <div className="header-item" onClick={handleToggleSidebar}>
        <FaBars style={{ color: "#00668c", fontSize: "24px" }} />
      </div>

      <div className="header-center">
      
        <img src={levelup} alt="Level Up Logo" className="company-logo" />
        <span className="company-name">LEVEL UP</span>
      </div>

      <div className="header-item" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "30px" }}>
          <Link to="/App1/notifications" style={{ textDecoration: "none", color: "#00668c" }}>
            <FaBell style={{ fontSize: "24px" }} />
          </Link>
        </div>
        <div onClick={toggleProfileBox}>
          <FaUser style={{ color: "#00668c", fontSize: "24px", marginRight: "10px" }} />
        </div>
      </div>

      {isProfileBoxOpen && (
        <div className="profile-box">
          <div className="profile-item">

            <Link to="/App1/profile" className="profile-link" style={{ textDecoration: "none", color: "#00668c" }}>
              <FaUser style={{ fontSize: "24px" }} />
              <span style={{ color: "black" }}>Profile</span>
            </Link>

          </div>
          <hr className="profile-line" />
          <div className="profile-item">
            <FaSignOutAlt style={{ color: "#00668c", fontSize: "24px" }} />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;