import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StudentDashboard from '../pages/StudentDashboard'; 
import FacultyDashboard from '../pages/FacultyDashboard';  

function BasicButton({ faculty, student }) {
  return (
    <Stack spacing={'30px'}>
      <Button sx={{ color: '#000000', backgroundColor: '#00668C' }} variant="contained" onClick={faculty}>
        Faculty
      </Button>
      <Button sx={{ color: '#000000', backgroundColor: '#D4EAF7' }} variant="contained" onClick={student}>
        Student
      </Button>
      <Routes>
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Stack>
  );
}

export default BasicButton;
