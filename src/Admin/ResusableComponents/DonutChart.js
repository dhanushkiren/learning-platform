import React from 'react';
import{Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { Stack } from '@mui/material';



ChartJS.register (
    ArcElement,Tooltip,Legend
    );

function DonutChart({data}){
    

    return(
<div className='circle'> 
    <Doughnut 
    data={data}   
    ></Doughnut>
    </div>
    )
}
export default DonutChart;