import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Stack } from '@mui/material';

function Secondcolumn({data}) {
   
  return (
    <Stack sx={{width:"100%"}} padding={'20px 100px 0px 100px'} >
    <ResponsiveContainer width="90%" height={350}>
      <BarChart
      width={500}
      height={300}
        data={data}
       
      > 
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Staff" stackId="a" fill="#00668C" />
      <Bar dataKey="Student" stackId="a" fill="#D4EAF7" />
    </BarChart>
  </ResponsiveContainer>
    </Stack>
  );
}

export default Secondcolumn;