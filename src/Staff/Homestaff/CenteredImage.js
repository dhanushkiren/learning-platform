// CenteredImage.js

import React from 'react';
import centerimage from '../assets/centerimage.jpeg';  // Replace with the correct file extension

const CenteredImage = () => {
  return (
    <div className="centered-content">
      <img src={centerimage} alt="bgimage" />
    </div>
  );
};

export default CenteredImage;
