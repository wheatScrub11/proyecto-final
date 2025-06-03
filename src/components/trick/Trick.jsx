import React, { useState, useEffect } from 'react';
import './trick.css'; // You'll need to create this CSS file

const TicTacToe = () => {
  const [showGameMode, setShowGameMode] = useState(true);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('Ex');
  const [player1, setPlayer1] = useState('Ex');
  const [player2, setPlayer2] = useState('Circle');
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    round: 1
  });
  const [gameOver, setGameOver] = useState(false);

  const handleSymbolSelect = (symbol) => {
    setSelectedSymbol(symbol);
    if (symbol === 'Ex') {
      setPlayer1('Ex');
      setPlayer2('Circle');
    } else {
      setPlayer1('Circle');
      setPlayer2('Ex');
    }
  };

  const startGame = () => {
    if (selectedSymbol) {
      setShowGameMode(false);
      setCurrentPlayer(player1);
    }
  };


  const resetRound = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(player1);
    setGameOver(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(player1);
    setScores({
      player1: 0,
      player2: 0,
      round: 1
    });
    setGameOver(false);
  };

  const handleCellClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      const winner = currentPlayer === player1 ? 'player1' : 'player2';
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner] + 1,
        round: prev.round + 1
      }));
      setGameOver(true);
      setTimeout(resetRound, 1000);
      return;
    }

    if (newBoard.every(cell => cell !== null)) {
      setScores(prev => ({
        ...prev,
        round: prev.round + 1
      }));
      setGameOver(true);
      setTimeout(resetRound, 1000);
      return;
    }

    
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
  };


  const checkWinner = (board, player) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
      return pattern.every(index => board[index] === player);
    });
  };


  const renderCellContent = (cell) => {
    if (cell === 'Ex') {
      return <img src="Photos/ex.svg" alt="X" className="cuizz" />;
    } else if (cell === 'Circle') {
      return <img src="Photos/cr.svg" alt="O" className="cuizz" />;
    }
    return null;
  };


  const getCellStyle = (index) => {
    if (gameOver && checkWinner(board, currentPlayer)) {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      const isWinningCell = winPatterns.some(pattern => {
        return pattern.includes(index) && pattern.every(i => board[i] === currentPlayer);
      });

      return isWinningCell ? { backgroundColor: 'rgba(76, 255, 81, 1)' } : null;
    }
    return null;
  };

  return (
    <div className="tic-tac-toe-container">
      {showGameMode ? (
        <div className="user-input">
          Welcome to Tic Tac Toe, please, select your gamemode:
          <div className="ex-or-circle">
            <img 
              className={`a userEx ${selectedSymbol === 'Ex' ? 'selected' : ''}`} 
              src="Photos/ex.svg" 
              alt="X" 
              onClick={() => handleSymbolSelect('Ex')}
            />
            <img 
              className={`a userCircle ${selectedSymbol === 'Circle' ? 'selected' : ''}`} 
              src="Photos/cr.svg" 
              alt="O" 
              onClick={() => handleSymbolSelect('Circle')}
            />
          </div>
          <div className="ok-btn" onClick={startGame}>Ok</div>
        </div>
      ) : (
        <div id="main-box">
          <div className="heading">
            <div className="logo">
              <img className="x" src="Photos/ex.svg" alt="X" />
              <img className="cr" src="Photos/cr.svg" alt="O" />
            </div>
            <div className="turn-btn">
              <img 
                className="x2" 
                src={`Photos/${currentPlayer === 'Ex' ? 'ex2.svg' : 'cr2.svg'}`} 
                alt={currentPlayer === 'Ex' ? 'X' : 'O'} 
              />
              Turn
            </div>
            <div className="restart-btn" onClick={resetGame}>
              <div className="res-box">
                <img className="res" src="Photos/res.svg" alt="Reset" />
              </div>
            </div>
          </div>
          <div id="main-grid">
            {board.map((cell, index) => (
              <div 
                key={index} 
                className={`box ${index}`} 
                onClick={() => handleCellClick(index)}
                style={getCellStyle(index)}
              >
                {renderCellContent(cell)}
              </div>
            ))}
          </div>
          <div className="footer">
            <div className="z player-score" style={{ backgroundColor: player1 === 'Ex' ? '#31c5bf' : '#f2b235' }}>
              Player1 <br />
              <div className="player1-counter">{scores.player1}</div>
            </div>
            <div className="z game-score">
              Round
              <div className="game-counter">{scores.round}</div>
            </div>
            <div className="z cpu-score" style={{ backgroundColor: player2 === 'Ex' ? '#31c5bf' : '#f2b235' }}>
              Player2 <br />
              <div className="player2-counter">{scores.player2}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;