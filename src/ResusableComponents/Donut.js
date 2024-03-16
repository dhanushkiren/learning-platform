import React from "react";
import ReactApexChat from "react-apexcharts";
function Donut({options, series}){
    return (
    
          <ReactApexChat options={options} series={series} type="radialBar" height={300} />
    
    );
  }
  
    



export default Donut;