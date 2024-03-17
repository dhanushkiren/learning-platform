import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes
import './App3.css';
import Header from './Header';
import Sidebar from './Sidebar';
import CenteredImage from './CenteredImage'; 
import RoundedImages from './RoundedImages'; 
import AddStudent from './AddStudent';
import AddStaff from './AddStaff';
import Profile from './Profile';
import Notification from './Notification';
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard component

function Home3() {
  return (
    <div className="content">
      <CenteredImage />
      <RoundedImages />
    </div>
  );
}

function App3() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addstaff" element={<AddStaff />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App3;
