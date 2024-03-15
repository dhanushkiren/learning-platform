import React from 'react'
import Profile from '../profile'
import { Button } from '@mui/material';

function FacultyDashboard({setFacultyOpen,fromAdmin}) {
    const carddata=
    {
        count:500,
        name:"Faculty",
    
    }
    const one = [
        {
          name: "January",
          Staff: 4000,
          Student: 2400,
        },
        {
          name: "Feburary",
          Staff: 3000,
          Student: 1398,
        },
        {
          name: "March",
          Staff: 2000,
          Student: 9800,
        },
        {
          name: "April",
          Staff: 2780,
          Student: 3908,
    
        },
        {
          name: "May",
          Staff: 1890,
          Student: 4800,
        },
        {
          name: "june",
          Staff: 2390,
          Student: 3800,
        },
      ];
      const state= {
          
        series: [60],
        options: {
          chart: {
            height: 300,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Video Uploaded'],
        },
      
      
      }
   const statetwo= {
              
        series: [70],
        options: {
          chart: {
            height: 300,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Task Uploaded'],
        },
      
      
      }
  return (
    <div>
      {fromAdmin&&<Button  style={{display:'flex',position:'relative',left:'90%', top:'650px', backgroundColor:'#D4EAF7'}} onClick={()=>setFacultyOpen(false)}>
        Back 
      </Button>}
        <Profile one={one} state={state} statetwo={statetwo} carddata={carddata}/>
    </div>
  )
}

export default FacultyDashboard;