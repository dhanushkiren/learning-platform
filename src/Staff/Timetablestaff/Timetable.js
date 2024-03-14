import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Timetable.css"; // Make sure to import your CSS file
import { FaAngleDown, FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon

const TimetablePage = ({ isOpen, toggleSidebar }) => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setIsDropdownOpen(false); // Close dropdown after selecting a day
  };

  // Dummy timetable data for demonstration
  const timetableData = {
    Monday: [
      "8:00 AM - 9:00 AM: OT",
      "9:00 AM - 10:00 AM: Cypto",
      "10:00 AM - 11:00 AM: PHP",
      "10:00 AM - 11:00 AM: PHP",
    ],
    Tuesday: [
      "8:00 AM - 9:00 AM: MYSQL",
      "9:00 AM - 10:00 AM: English",
      "10:00 AM - 11:00 AM: PHP",
    ],
    Wednesday: [
      "8:00 AM - 9:00 AM: Cloud",
      "9:00 AM - 10:00 AM: DSA",
      "10:00 AM - 11:00 AM: MYSQL",
    ],
    Thursday: [
      "8:00 AM - 9:00 AM: JAVA",
      "9:00 AM - 10:00 AM: python",
      "10:00 AM - 11:00 AM: MLDL",
    ],
    Friday: [
      "8:00 AM - 9:00 AM: Cloud",
      "9:00 AM - 10:00 AM: MLDL",
      "10:00 AM - 11:00 AM: DM ",
    ],
  };

  // Ensure timetableData[selectedDay] has exactly 9 items
  const timetableItems = timetableData[selectedDay] || [];

  return (
    <div className={`timetable-page ${isOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar1">
        <div className="menu-bar" onClick={toggleSidebar}>
          <span className="timetable-label">TIMETABLE</span>
        </div>
        <hr className="divider" />
        <div className="day-selector" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="day-label">Select Day</span>
          <FaAngleDown className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`} />
        </div>
        <hr className="divider" />
        {/* Day options dropdown */}
        {isDropdownOpen && (
          <div className="day-options">
            {days.map((day) => (
              <div
                key={day}
                className={`day-option ${selectedDay === day ? "active" : ""}`}
                onClick={() => handleDayChange(day)}
              >
                {day}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Timetable content */}
      <div className="timetable-content">
        <div className="timetable-container">
          {/* Clickable Timetable icon */}
          <Link to="/timetable">
            <div className="calendar-icon">
              <FaCalendarAlt />
            </div>
          </Link>
          {/* Timetable boxes */}
          <div className="timetable-boxes">
            {timetableItems.map((item, index) => (
              <div key={index} className="timetable-box">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;