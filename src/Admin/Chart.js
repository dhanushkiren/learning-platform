import React from "react";
import Donut from "./ResusableComponents/Donut";
import LineChart from "./ResusableComponents/LineChart";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Stack, Typography } from "@mui/material";
import './App3.css';
import GroupsIcon from '@mui/icons-material/Groups';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Dropdown } from '@mui/base/Dropdown';

function Chart({one,state,statetwo,carddata}) {
  
console.log("carddata",carddata)
  return (
    <Stack flexDirection="row" sx={{ alignItems: "center", justifyContent: "center",width:"100%",marginTop:"50px" }} gap={23}>
      <Stack flexDirection="column" alignSelf="flex-start">
        <Grid container spacing={10}>
          <Grid item xs={5} sx={{m:2}}>
            <Card sx={{ width: 200 }}>
             
                <Stack  sx={{flexDirection:"row",alignItems:"center",p:2,justifyContent:"center"}} gap={2}>
                  <Stack>  <GroupsIcon sx={{ fontSize: 55, height: 55,color:"#006683" }} /> </Stack>
                
                  <Stack flexDirection="column">
                        <Typography >{carddata.count}</Typography>
                 
                    <Typography >{carddata.name}</Typography>
                    </Stack> 
                 
                </Stack>
          
            </Card>
          </Grid>
        </Grid>
        <Stack sx={{flexDirection:"row"}}>
        <Stack> <YouTubeIcon sx={{ fontSize: 50, height: 50,color:"#006683" }}/> </Stack>
        <Donut options={state.options} series={state.series} />
        </Stack>
        <Stack sx={{flexDirection:"row"}}>
        <Stack> <NoteAltIcon sx={{ fontSize: 50, height: 50,color:"#006683" }}/> </Stack>
        <Donut options={statetwo.options} series={statetwo.series} />
        </Stack>
      </Stack>
      <Stack flexDirection="column" gap={5}>
        <LineChart one={one} />
        <LineChart one={one} />
        <Dropdown/>
      </Stack>
    </Stack>
  );
}
export default Chart;