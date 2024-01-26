import React, { useState, useEffect } from 'react';
import { FaEdit, PiTriangleThin, FaXmark, GiCheckMark } from "../style/Icon";
import "../style/ClockStyling.css";
import DashedCircle from '../style/circle'
import {getRotationStyle, getRotationForCircle1, getRotationForCircle, getRotationForTriangle, getRotationForSquare} from '../style/rotation'

const Clock = () => {
  const [datetime, setDatetime] = useState(new Date());
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [customHour, setCustomHour] = useState(0);
  const [customMinute, setCustomMinute] = useState(0);
  const [customSecond, setCustomSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDatetime(prevDatetime => new Date(prevDatetime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const setCustomTime = () => {
    const newTime = new Date();
    newTime.setHours(customHour);
    newTime.setMinutes(customMinute);
    newTime.setSeconds(customSecond);
    setDatetime(newTime);
    setDialogOpen(false);
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <div id="circle"></div>
      <div id='time'>
        {`${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`}
      </div>
      <div >
        <div style={getRotationStyle(datetime.getSeconds(), 60, 170)}></div>
        <div style={getRotationStyle(datetime.getMinutes(), 60, 105)}></div>
        <div style={getRotationStyle(datetime.getHours(), 12, 50)}></div>
        <PiTriangleThin 
          style={{
            ...getRotationForTriangle(datetime.getMinutes(), 60, 235),  
          }} 
        />
        
        <div 
          id='square'        
          style={{
            ...getRotationForSquare(datetime.getSeconds(), 60, 250),  
            fontSize: '200px' 
          }} ></div>
          <div 
          className='circle5'
          style={{
            ...getRotationForCircle1(datetime.getHours(), 60, 230),  
            fontSize: '15px' 
          }} >
            <span>
          <DashedCircle/>
          </span>
          </div>
          
        <div 
        id='circle2'
        style={{
          ...getRotationForCircle(datetime.getHours(), 60, 105),  
          fontSize: '350px' 
        }} 
        ></div>
      </div>
      <FaEdit id="editIcon" onClick={openDialog} size='30px'/>
      {isDialogOpen && (
        <div style={{ 
          position: 'fixed', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          padding: '20px', 
          backgroundColor: '#819064', 
          borderRadius: '8px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          zIndex: '2',
          width: '300px',
          height: '150px'
          }}>
          <div className='label'>
          <label style={{
            position: 'fixed',
            top: '5%', 
            left: '5%', 
            marginBottom: '5px'
          }}>時間調整</label>
            <input  type="number" className='input-style' value={customHour} onChange={(e) => setCustomHour(e.target.value)} />
            <label >時</label>
            <input type="number" className='input-style' value={customMinute} onChange={(e) => setCustomMinute(e.target.value)} />
            <label >分</label>
            <input type="number" className='input-style' value={customSecond} onChange={(e) => setCustomSecond(e.target.value)} />
            <label >秒</label>
          </div>
          <FaXmark className="xmark" onClick={closeDialog} size='30px'/>
          <GiCheckMark className="tick" onClick={setCustomTime} size='30px'/>

        </div>
      )}
    </div>
  );
};

export default Clock;