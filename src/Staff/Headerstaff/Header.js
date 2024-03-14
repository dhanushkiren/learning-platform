import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";

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
      <div className="header-item">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-box" />
          <div className="search-icon-container">
            <FaSearch style={{ color: "white", fontSize: "20px" }} />
          </div>
        </div>
      </div>
      {/* Link the notification icon */}
      <div className="header-item">
        <Link to="/App1/notifications">
          <FaBell style={{ color: "#00668c", fontSize: "24px",marginLeft:"100px" }} />
        </Link>
      </div>
      <div className="header-item" onClick={toggleProfileBox}>
        <FaUser
          style={{ color: "#00668c", fontSize: "24px", marginLeft: "30px" }}
        />
      </div>
      {isProfileBoxOpen && (
        <div className="profile-box">
          <div className="profile-item">
            <Link to="/App1/profile" className="profile-link">
              <FaUser style={{ color: "#00668c", fontSize: "24px" }} />
              <span>Profile</span>
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