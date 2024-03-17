import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
function LineChart({one}) {
 
  return (
          <BarChart
            width={500}
            height={300}
            data={one}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Staff" fill="#71C4EF" />
            <Bar dataKey="Student" fill="#00668C" />
          </BarChart>
        );
      }
      

export default LineChart;