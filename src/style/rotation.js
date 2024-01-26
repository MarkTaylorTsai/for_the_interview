import React from "react";


const getRotationStyle = (unit, max, length) => {
    const rotation = (unit / max) * 360;
    return {
      position: 'absolute',
      top: '325px',
      left: '800px',
      width: '5px',
      height: `${length}px`,
      backgroundColor: 'rgba(145, 160, 116, 0)',
      borderRadius: '10px',
      border: '2px solid #91A074',
      overflow: 'hidden',
      transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
      transformOrigin: '50% 100%',
    };
  };

  const getRotationForCircle1 = (unit, max, length) => {
    const rotation = (unit / max) * 360;
    return {
      position: 'absolute',
      top: '325px',
      left: '800px',
      height: `${length}px`,
      width: `${length}px`,
      color: '#91A074',
      transform: `translate(-50%, -50%) rotate(0)`,
      transformOrigin: 'center',
    };
  };

  const getRotationForCircle = (unit, max, length) => {
    const rotation = (unit / max) * 360;
    return {
      position: 'absolute',
      top: '325px',
      left: '800px',
      height: `${length}px`,
      width: `${length}px`,
      color: '#91A074',
      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      transformOrigin: 'center',
    };
  };

  const getRotationForTriangle = (unit, max, length) => {
    const rotation = (unit / max) * 360;
    return {
      position: 'absolute',
      top: '305px',
      left: '800px',
      height: `${length}px`,
      width: `${length}px`,
      color: '#91A074',
      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      transformOrigin: '50% 58.5%',
    };
  };

  const getRotationForSquare = (unit, max, length) => {
    const rotation = (unit / max) * 360;
    return {
      position: 'absolute',
      top: '325px',
      left: '800px',
      height: `${length-3}px`,
      width: `${length-3}px`,
      color: '#91A074',
      transform: `translate(-50%, -50%) rotate(${rotation+45}deg)`,
      transformOrigin: 'center',
    };
  };

  export {getRotationStyle, getRotationForCircle1, getRotationForCircle, getRotationForTriangle, getRotationForSquare}