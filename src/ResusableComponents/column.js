import { Stack } from '@mui/material';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Column({data}) {
  

  return (
    <Stack  height={'400'}>
      <BarChart
      width={400}
      height={350}
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
    </Stack>
  );
}

export default Column;
