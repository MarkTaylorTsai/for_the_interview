import React from 'react';
import { IoMdWater } from "react-icons/io";

const DashedCircle = () => {
  const totalPoints = 12;
  const circleRadius = 118; // 圓的大小
  const pointRadius = 10; // 小圓的大小
  const dashGap = 360 / totalPoints; 
  const iconColor = '#91A074'

  const dashedLineStyle = {
    position: 'absolute',
    top: '183px',
    left: '68px',
    transform: 'translate(-50%, -50%)',
    width: `${circleRadius * 2}px`, 
    height: `${circleRadius * 2}px`, 
    borderRadius: '50%',
  };

  const dashes = Array.from({ length: totalPoints }).map((_, index) => {
    const cx = 50 + circleRadius * Math.cos((dashGap * index * Math.PI) / 180);
    const cy = 50 + circleRadius * Math.sin((dashGap * index * Math.PI) / 180);

    return (
        <IoMdWater
        key={index}
        style={{ 
          position: 'absolute', 
          top: `${cy - pointRadius}px`, 
          left: `${cx - pointRadius}px`,
          transform: `rotate(${270 + (30 * index)}deg)`,
          transformOrigin: 'center',
        }}
        size={pointRadius * 2}
        color={iconColor}
      />
      
    );
  });

  return (
    <div style={dashedLineStyle}>
      {dashes}
    </div>
  );
}

export default DashedCircle;