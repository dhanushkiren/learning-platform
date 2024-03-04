// RoundedImages.js

import React from 'react';
import { Link } from 'react-router-dom';
import StaffImage from './assets/Staffimage.jpeg';
import StudentImage from './assets/Studentimage.jpeg';

const RoundedImages = () => {
  return (
    <div className="rounded-images-container">
      <div className="rounded-image">
        <Link to="/addstaff" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={StaffImage} alt="RoundedImage 1" />
          <p>STAFF</p>
        </Link>
      </div>
      <div className="rounded-image">
        <Link to="/addstudent" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img
            src={StudentImage}
            alt="RoundedImage 2"
            style={{
              borderRadius: '50%',
              width: '115px',
              height: '115px',
              objectFit: 'cover',
              marginBottom: '5px',
            }}
          />
          <p style={{ marginTop: '7px' }}>STUDENT</p>
        </Link>
      </div>
    </div>
  );
};

export default RoundedImages;
