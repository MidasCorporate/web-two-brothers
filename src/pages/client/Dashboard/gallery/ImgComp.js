import React from 'react';

function ImgComp({ src }) {
  const imgStyles = {
    width: `${100}%`,
    height: 'auto',
    // backgroundSize: 'cover',
  };

  return <img src={src} alt="slide-img" style={imgStyles} />;
}

export default ImgComp;
