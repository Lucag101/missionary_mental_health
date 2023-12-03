import React, { useState, useEffect } from 'react';
import '../../styles/sharedStyles.css'

const Timer = () => {
  const [countdown, setCountdown] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCountdown(60);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, countdown]);

  return (
    <div id="countdown">
      <div id="countdown-number">{countdown}</div>
      <svg>
      <circle r="90" cx="100" cy="100"></circle>
      </svg>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
