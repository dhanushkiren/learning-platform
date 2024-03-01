// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import CenteredImage from './CenteredImage'; 
import RoundedImages from './RoundedImages'; 
import AddStudent from './AddStudent';
import AddStaff from './AddStaff';
import Profile from './Profile';
import Notification from './Notification';

function Home() {
  return (
    <div className="content">
      <CenteredImage />
      <RoundedImages />
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
