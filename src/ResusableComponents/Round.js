import React from 'react';

function Round({data}) {
  return (
    <div>
   <div className='fullcircle'>
    <span style={{width: '20px', 
        height:'20px',display:' inline-block', fontWeight:'900',position:'relative',left:'20px'}}>{data?.totFaculty}</span>
        <br/>
    <span style={{width: '20px', 
        height:'20px',display:' inline-block', fontWeight:'900'}}>Faculty</span>
   </div>
   <div className='halfcircle'>
    <span  style={{width: '20px', 
        height:'20px',display:' inline-block', fontWeight:'900', alignContent:'center',position:'relative',left:'20px'}} >{data?.totStudents}</span>
    <br/>
    <span  style={{width: '20px', 
        height:'20px',display:' inline-block', fontWeight:'900', justifyContent:'center'}}>Student</span>
   </div>
   
   </div>
  )
}

export default Round;