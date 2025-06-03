import React, { useState, useEffect, useRef } from 'react';
import './pomo.css'; 

const Pomodoro = () => {
  const [time, setTime] = useState({ hrs: '', mins: '', secs: '' });
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showToby, setShowToby] = useState(false);
  const [blinkText, setBlinkText] = useState(false);
  
  const intervalRef = useRef(null);
  const tobyIntervalRef = useRef(null);
  const blinkIntervalRef = useRef(null);
  const endSoundRef = useRef(null);

  useEffect(() => {
    endSoundRef.current = new Audio("assets/toby.mp3");
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (tobyIntervalRef.current) clearInterval(tobyIntervalRef.current);
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\D/g, ''); // Remove non-digit characters
    setTime(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const validateTime = () => {
    let { hrs, mins, secs } = time;
    
    hrs = hrs ? Math.min(parseInt(hrs), 24) : '';
    mins = mins ? Math.min(parseInt(mins), 60) : '';
    secs = secs ? Math.min(parseInt(secs), 60) : '';
    
    setTime({ hrs, mins, secs });
  };

  const isTimeEmpty = () => {
    return (time.hrs === '' || time.mins === '' || time.secs === '') || 
           (parseInt(time.hrs || 0) === 0 && 
            parseInt(time.mins || 0) === 0 && 
            parseInt(time.secs || 0) === 0);
  };

  const startTimer = () => {
    if (isTimeEmpty()) return;
    
    setIsRunning(true);
    setIsPaused(false);
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
    }, 6000);

    // Start checking if time reaches zero
    tobyIntervalRef.current = setInterval(checkTimeZero, 1000);
    
    // Start countdown
    intervalRef.current = setInterval(countdown, 1000);
  };

  const countdown = () => {
    setTime(prev => {
      let { hrs, mins, secs } = prev;
      hrs = parseInt(hrs || 0);
      mins = parseInt(mins || 0);
      secs = parseInt(secs || 0);
      
      if (secs > 0) {
        secs--;
      } else if (mins > 0) {
        mins--;
        secs = 59;
      } else if (hrs > 0) {
        hrs--;
        mins = 59;
        secs = 59;
      }
      
      return { hrs: hrs.toString(), mins: mins.toString(), secs: secs.toString() };
    });
  };

  const checkTimeZero = () => {
    const { hrs, mins, secs } = time;
    if (parseInt(hrs || 0) === 0 && 
        parseInt(mins || 0) === 0 && 
        parseInt(secs || 0) === 0) {
      
      clearInterval(intervalRef.current);
      clearInterval(tobyIntervalRef.current);
      
      endSoundRef.current.play();
      setShowToby(true);
      
      // Blink text effect
      blinkIntervalRef.current = setInterval(() => {
        setBlinkText(prev => !prev);
      }, 500);
      
      setTimeout(() => {
        setShowToby(false);
        clearInterval(blinkIntervalRef.current);
        setBlinkText(false);
        resetTimer();
      }, 4000);
    }
  };

  const pauseTimer = () => {
    if (isRunning && !isPaused) {
      clearInterval(intervalRef.current);
      clearInterval(tobyIntervalRef.current);
      setIsPaused(true);
    } else if (isPaused) {
      startTimer();
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    clearInterval(tobyIntervalRef.current);
    clearInterval(blinkIntervalRef.current);
    
    setTime({ hrs: '', mins: '', secs: '' });
    setIsRunning(false);
    setIsPaused(false);
    setShowToby(false);
    setBlinkText(false);
  };

  useEffect(() => {
    validateTime();
  }, [time]);

  const inputStyle = {
    color: blinkText ? '#2B7229' : 'black'
  };

  return (
    <div className="main-container">
      {showAlert && (
        <div className="currentlyStarted disappear">
          Click 'reset' to start a new pomodoro
        </div>
      )}
      
      <div className="time-section">
        <input
          name="hrs"
          type="text"
          min="0"
          placeholder="00"
          value={time.hrs}
          onChange={handleInputChange}
          style={inputStyle}
          disabled={isRunning && !isPaused}
        />:
        <input
          name="mins"
          type="text"
          min="0"
          max="60"
          placeholder="00"
          value={time.mins}
          onChange={handleInputChange}
          style={inputStyle}
          disabled={isRunning && !isPaused}
        />:
        <input
          name="secs"
          type="text"
          min="0"
          max="60"
          placeholder="00"
          value={time.secs}
          onChange={handleInputChange}
          style={inputStyle}
          disabled={isRunning && !isPaused}
        />
        {showToby && (
          <img src="assets/Annoying_Dog.webp" className="toby" alt="Toby Fox" />
        )}
      </div>
      
      <div className="indicators">
        <div className="hours">Hrs</div>
        <div className="minutes">Mins</div>
        <div className="seconds">Secs</div>
      </div>
      
      <div className="buttons">
        <button 
          className="start" 
          onClick={startTimer}
          disabled={isTimeEmpty() || (isRunning && !isPaused)}
        >
          Start
        </button>
        <button 
          className="reset" 
          onClick={resetTimer}
          disabled={!isRunning && isTimeEmpty()}
        >
          Reset
        </button>
        <button 
          className="stop" 
          onClick={pauseTimer}
          disabled={!isRunning || isTimeEmpty()}
        >
          {isPaused ? 'Resume' : 'Stop'}
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;