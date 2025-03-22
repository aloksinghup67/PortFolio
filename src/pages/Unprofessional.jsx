import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Unprofessional.css';
import sky1 from '../assets/sky1.jpg';
import sky2 from '../assets/sky2.jpg';
import sky3 from '../assets/sky3.jpg';
import sky4 from '../assets/sky4.jpg';
import farcry5 from '../assets/farcry 5.jpg';
import gta5 from '../assets/gta 5.jpg';
import october from '../assets/october.jpg';
import shawshank from '../assets/shawshank redemption.jpg';
import Song1 from '../assets/Song1.m4a';

const TicTacToe = () => {
  const HUMAN = "X";
  const COMPUTER = "O";
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(HUMAN);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (turn === COMPUTER && !gameOver) {
      
      const timer = setTimeout(() => {
        const move = computerMove(board);
        if (move !== null) {
          const newBoard = [...board];
          newBoard[move] = COMPUTER;
          setBoard(newBoard);
          const winner = checkWinner(newBoard);
          if (winner) {
            endGame(winner);
          } else {
            setTurn(HUMAN);
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [turn, board, gameOver]);

  const handleClick = (index) => {
    if (board[index] === "" && turn === HUMAN && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = HUMAN;
      setBoard(newBoard);
      const winner = checkWinner(newBoard);
      if (winner) {
        endGame(winner);
      } else {
        setTurn(COMPUTER);
      }
    }
  };

  const endGame = (winner) => {
    setGameOver(true);
    if (winner === COMPUTER) setResult("Alok won!");
    else if (winner === HUMAN) setResult("You won!"); 
    else setResult("It's a Draw!");
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setGameOver(false);
    setResult("");
    setTurn(HUMAN);
  };

  const checkWinner = (b) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let condition of winConditions) {
      const [a, b1, c] = condition;
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    if (b.every((cell) => cell !== "")) return "Draw";
    return null;
  };

  // Minimax algorithm implementation
  const minimax = (newBoard, player) => {
    const availSpots = newBoard
      .map((cell, index) => (cell === "" ? index : null))
      .filter((val) => val !== null);

    const winner = checkWinner(newBoard);
    if (winner === HUMAN) return { score: -10 };
    else if (winner === COMPUTER) return { score: 10 };
    else if (availSpots.length === 0) return { score: 0 };

    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      let move = {};
      move.index = availSpots[i];
      newBoard[availSpots[i]] = player;
      if (player === COMPUTER) {
        const result = minimax(newBoard, HUMAN);
        move.score = result.score;
      } else {
        const result = minimax(newBoard, COMPUTER);
        move.score = result.score;
      }
      newBoard[availSpots[i]] = "";
      moves.push(move);
    }

    let bestMove;
    if (player === COMPUTER) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }
    return bestMove;
  };

  const computerMove = (currentBoard) => {
    const move = minimax(currentBoard.slice(), COMPUTER);
    return move ? move.index : null;
  };

  return (
    <div className="tic-tac-toe-box">
      <h2>Play a Tic Tac Toe with me</h2>
      <div className="tic-tac-toe-board">
        {board.map((cell, index) => (
          <div key={index} className="tic-cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {gameOver && <div className="game-result">{result}</div>}
      <button className="restart-btn" onClick={restartGame}>Restart</button>
    </div>
  );
};

const UnprofessionalMe = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <button className="close-button" onClick={handleClose} aria-label="Close">
        <div className="close-icon"></div>
      </button>
      <div className="unprofessional-me">
        <div>
          <h1 style={{ color: '#E50914' }}>Some Unprofessional things</h1>
          <br />
        </div>
        <section className="photography">
          <h2>Taking random sky images 😂</h2>
          <br />
          <div className="photo-gallery">
            <img src={sky1} alt="Sky 1" />
            <img src={sky2} alt="Sky 2" />
            <img src={sky3} alt="Sky 3" />
            <img src={sky4} alt="Sky 4" />
          </div>
        </section>
        <section className="gaming">
          <h2>Playing Games</h2>
          <br />
          <div className="gaming-gallery">
            <img src={farcry5} alt="Far Cry 5" />
            <img src={gta5} alt="GTA 5" />
          </div>
        </section>
        
        <section className="tic-tac-toe-section">
          <TicTacToe />
        </section>
        <section className="cringe-choir">
          <h2>🙊 Cringe Choir by me</h2>
          <br />
          <div className="song-card">
            <div className="song-card-bg"></div>
            <div className="song-controls">
              <button onClick={togglePlayPause} className="play-pause-btn">
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
              />
            </div>
            <audio
              ref={audioRef}
              src={Song1}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          </div>
        </section>
        <section className="movies">
          <h2>Watching Movies</h2>
          <br />
          <div className="movies-gallery">
            <img src={october} alt="October" />
            <img src={shawshank} alt="Shawshank Redemption" />
          </div>
        </section>
      </div>
    </>
  );
};

export default UnprofessionalMe;
