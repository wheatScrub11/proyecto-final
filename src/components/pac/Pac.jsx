import React, { useEffect, useRef, useState } from 'react';
import './pac.css'; // Estilos para el componente

const GRID_SIZE = 66;
const INITIAL_FRUITS = 48;

const blockedDown = [55,56,57,58,59,60,61,62,63,64,65,5,12,20,25,29,37,38,39,46,52];
const blockedUp = [0,1,2,3,4,5,6,7,8,9,10,25,29,38,45,47,59,60,61,51,53];
const blockedRight = [65,54,43,32,21,10,2,6,13,15,17,22,26,30,33,35,39,41,47,56,62];
const blockedLeft = [55,44,33,22,11,0,4,8,15,17,19,24,28,32,35,37,41,43,51,58,64];
const noFruit = [3,7,14,16,18,23,27,31,34,36,40,42,48,49,50,57,63];

const Pacman = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [speedrun, setSpeedrun] = useState(0.0);
  const [totalFruits, setTotalFruits] = useState(INITIAL_FRUITS);
  const [position, setPosition] = useState(0);

  const boxesRef = useRef([]);
  const pacmanRef = useRef(null);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Inicializar grid con frutas
    boxesRef.current = Array.from({ length: GRID_SIZE }, (_, i) => ({
      hasFruit: !noFruit.includes(i),
    }));

    // Temporizador
    intervalRef.current = setInterval(() => {
      if (totalFruits < INITIAL_FRUITS && totalFruits > 0) {
        setSpeedrun((prev) => parseFloat((prev + 0.01).toFixed(2)));
      }
    }, 10);

    // Escuchar teclas
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalFruits, position]);

  const handleKeyDown = (e) => {
    const key = e.key;
    let newPosition = position;

    if ((key === 'ArrowDown' || key === 's') && !blockedDown.includes(position)) {
      newPosition += 11;
    } else if ((key === 'ArrowUp' || key === 'w') && !blockedUp.includes(position)) {
      newPosition -= 11;
    } else if ((key === 'ArrowRight' || key === 'd') && !blockedRight.includes(position)) {
      newPosition += 1;
    } else if ((key === 'ArrowLeft' || key === 'a') && !blockedLeft.includes(position)) {
      newPosition -= 1;
    }

    // Si se movió
    if (newPosition !== position && newPosition >= 0 && newPosition < GRID_SIZE) {
      const box = boxesRef.current[newPosition];
      if (box.hasFruit) {
        box.hasFruit = false;
        setPlayerScore((prev) => prev + 50);
        setTotalFruits((prev) => prev - 1);
        playSound('sounds/takeFruit.m4a');
        if ((playerScore + 50) % 500 === 0) {
          playSound('sounds/siu.mp3');
        }
        if (totalFruits - 1 === 0) {
          playSound('sounds/yeeeee.mp3');
        }
      }
      setPosition(newPosition);
    }
  };

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  return (
    <div className="mainbox">
      <div className="score-box">{playerScore}</div>
      <div className="text" ref={timerRef}>{speedrun.toFixed(2)}s</div>
      {Array.from({ length: GRID_SIZE }, (_, i) => (
        <div key={i} className={`box${i + 1} z`}>
          {position === i && (
            <div
              ref={pacmanRef}
              style={{
                height: '60px',
                width: '60px',
                borderRadius: '5em',
                backgroundColor: 'yellow',
                position: 'absolute',
                top: '15px',
                left: '12px',
              }}
            ></div>
          )}
          {boxesRef.current[i]?.hasFruit && (
            <div
              style={{
                height: '20px',
                width: '20px',
                borderRadius: '5em',
                backgroundColor: 'orange',
                position: 'absolute',
                top: '35px',
                left: '31px',
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pacman;
