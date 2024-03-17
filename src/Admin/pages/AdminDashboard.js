import React, { useState } from 'react';
import Dropside from '../ResusableComponents/DropSide';
import Column from '../ResusableComponents/column';
import DonutChart from '../ResusableComponents/DonutChart';
import { Stack, Box } from '@mui/material';
import Secondcolumn from '../ResusableComponents/Secondcolumn';
import Round from '../ResusableComponents/Round';
import BasicButton from '../ResusableComponents/BasicButton';
import FacultyDashboard from './FacultyDashboard';
import StudentDashboard from './StudentDashboard';
import subjectsData from '../ResusableComponents/video';

function AdminDashboard() {
  const [facultyOpen, setFacultyOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);
  const [pageData, setPageData] = useState(subjectsData['Chemistry']);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      setPageData(subjectsData[menuItem]);
    };
  }

  const faculty = () => {
    setFacultyOpen(true);
  }

  const student = () => {
    setStudentOpen(true);
  }

  return (
    <>
      {!facultyOpen && !studentOpen && (
        <Box sx={{ marginTop: '50px' }}>
          <Stack flexDirection={'row'} width={'100%'} height={"40vh"}>
            <Box sx={{ justifyContent: "center", display: "flex", width: '40%' }}>
              <Dropside createHandleMenuClick={createHandleMenuClick} />
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: '20%', padding: '30px' }}>
              <Round data={pageData} />
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: "40%" }}>
              <Box sx={{ padding: 5 }}>
                {pageData?.toDonutchart && <DonutChart data={pageData?.toDonutchart} />}
              </Box>
            </Box>
          </Stack>

          <Stack flexDirection={'row'}>
            <Box sx={{ justifyContent: "center", display: "flex", width: "47%" }}>
              <Column data={pageData?.tocolumn} />
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: "7%", padding: '100px 5px 5px 5px' }} >
              <BasicButton faculty={faculty} student={student} />
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: "45%" }}>
              <Secondcolumn data={pageData?.toSecondcolumn} />
            </Box>
          </Stack>
        </Box>
      )}

      {facultyOpen && <FacultyDashboard setFacultyOpen={setFacultyOpen} fromAdmin={true} />}
      {studentOpen && <StudentDashboard setStudentOpen={setStudentOpen} fromAdmin={true} />}
    </>
  );
}

export default AdminDashboard;
