// CenteredImage.js

import React from 'react';
import HomeImage from './assets/adminhomeimage.jpeg';

const CenteredImage = () => {
  return (
    <div className="centered-content">
      <img src={HomeImage} alt="bgimage" />
    </div>
  );
};

export default CenteredImage;
