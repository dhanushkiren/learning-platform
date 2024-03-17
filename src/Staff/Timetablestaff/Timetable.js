import React, { useState } from "react";
import { FaBars, FaAngleDown, FaCalendarAlt, FaPlus, FaSave, FaEdit } from "react-icons/fa";
import "./Timetable.css"; // Import your CSS file

const TimetablePage = ({ isOpen, toggleSidebar }) => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [isAdding, setIsAdding] = useState(false);
  const [newEntry, setNewEntry] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [timetableData, setTimetableData] = useState({
    Monday: [
      { text: "8:00 AM - 9:00 AM: Math", isEditing: false },
      { text: "9:00 AM - 10:00 AM: Science", isEditing: false },
      { text: "10:00 AM - 11:00 AM: History", isEditing: false },
    ],
    Tuesday: [
      { text: "8:00 AM - 9:00 AM: English", isEditing: false },
      { text: "9:00 AM - 10:00 AM: Geography", isEditing: false },
      { text: "10:00 AM - 11:00 AM: Physics", isEditing: false },
    ],
    Wednesday: [
      { text: "8:00 AM - 9:00 AM: Chemistry", isEditing: false },
      { text: "9:00 AM - 10:00 AM: Biology", isEditing: false },
      { text: "10:00 AM - 11:00 AM: Computer Science", isEditing: false },
    ],
    Thursday: [
      { text: "8:00 AM - 9:00 AM: Art", isEditing: false },
      { text: "9:00 AM - 10:00 AM: Music", isEditing: false },
      { text: "10:00 AM - 11:00 AM: Physical Education", isEditing: false },
    ],
    Friday: [
      { text: "8:00 AM - 9:00 AM: Literature", isEditing: false },
      { text: "9:00 AM - 10:00 AM: Mathematics", isEditing: false },
      { text: "10:00 AM - 11:00 AM: Social Studies", isEditing: false },
    ],
  });

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [showDayOptions, setShowDayOptions] = useState(false);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setEditingIndex(-1); // Reset editing index when changing the day
    setIsAdding(false); // Reset isAdding when changing the day
    setShowDayOptions(false); // Close day options when a day is selected
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setNewEntry("");
    setEditingIndex(-1);
    setShowDayOptions(false); // Close day options when adding a new entry
  };

  const handleSaveClick = () => {
    if (isAdding) {
      if (newEntry.trim() !== "") {
        const updatedTimetableData = { ...timetableData };
        updatedTimetableData[selectedDay].push({ text: newEntry.trim(), isEditing: false });
        setTimetableData(updatedTimetableData);
        setNewEntry("");
        setIsAdding(false);
      }
    } else {
      const updatedTimetableData = { ...timetableData };
      updatedTimetableData[selectedDay] = timetableData[selectedDay].map((item, index) =>
        index === editingIndex ? { ...item, isEditing: false, text: newEntry.trim() } : item
      );
      setTimetableData(updatedTimetableData);
      setNewEntry("");
      setIsAdding(false);
    }
  };

  const handleEditClick = (day, entryIndex) => {
    const updatedTimetableData = { ...timetableData };
    updatedTimetableData[day][entryIndex].isEditing = true;
    setTimetableData(updatedTimetableData);
    setNewEntry(timetableData[day][entryIndex].text);
    setEditingIndex(entryIndex);
    setIsAdding(false);
    setShowDayOptions(false); // Close day options when editing an entry
  };

  const toggleDayOptions = () => {
    setShowDayOptions((prevShowDayOptions) => !prevShowDayOptions);
  };

  return (
    <div className={`timetable-page ${isOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar1">
        <div className="menu-bar" onClick={toggleSidebar}>
        
          <span className="timetable-label">TIMETABLE</span>
        </div>
        <hr className="divider" />
        <div className="day-selector">
          
          <div className="dropdown-wrapper">
            <div className="selected-day" onClick={toggleDayOptions}>
              {selectedDay} <FaAngleDown className={`dropdown-icon ${showDayOptions ? "open" : ""}`} />
            </div>
            {showDayOptions && (
              <div className="dropdown-options">
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
        </div>
        <hr className="divider" />
      </div>
      {/* Timetable content */}
      <div className="timetable-content">
        {/* Placeholder for timetable content */}
        <div className="timetable-container">
          {/* Timetable icon */}
          <div className="calendar-icon">
            <FaCalendarAlt />
          </div>
          {/* Timetable boxes */}
          <div className="timetable-boxes">
            {timetableData[selectedDay].map((item, index) => (
              <div key={index} className="timetable-box">
                {item.isEditing ? (
                  <div>
                    <input
                      type="text"
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                    />
                    <FaSave
                      className="save-icon"
                      onClick={handleSaveClick}
                    />
                  </div>
                ) : (
                  <div>
                    {item.text}
                    <FaEdit
                      className="edit-icon"
                      onClick={() => handleEditClick(selectedDay, index)}
                    />
                  </div>
                )}
              </div>
            ))}
            {/* Add icon */}
            <div className="timetable-box">
              {isAdding && (
                <input
                  type="text"
                  placeholder="Enter timing and subject"
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                />
              )}
              {isAdding && (
                <FaSave className="save-icon" onClick={handleSaveClick} />
              )}
              {!isAdding && (
                <div className="add-icon" onClick={handleAddClick}>
                  <FaPlus />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;