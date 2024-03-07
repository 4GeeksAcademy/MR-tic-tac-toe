import React, { useState } from "react";
import Board from "./Board";

import Menu from "./Menu";
import Data from "./Data";

const App = () => {
  const [startWithX, setStartWithX] = useState(true);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [winner, setWinner] = useState(null);
  const [xIsNext, setXIsNext] = useState(startWithX);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newSquares));
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setXIsNext(startWithX);
  };

  const handleStartGame = (weapon) => {
    setShowMenu(false);
    setStartWithX(weapon === "X");
  };

  return (
    <div className="game">
      {showMenu ? (
        <Menu onWeaponPick={handleStartGame} />
      ) : (
        <>
          <div className="game-board">
            <Board squares={squares} onClick={handleClick} />
          </div>
          <div className="game-info">
            <Data
              player1Name={player1Name}
              player2Name={player2Name}
              winner={winner}
              xIsNext={xIsNext}
              startWithX={startWithX}
              setStartWithX={setStartWithX}
              setPlayer1Name={setPlayer1Name}
              setPlayer2Name={setPlayer2Name}
            />
          </div>
          <div className="game-reset">
            <ResetButton onClick={resetGame} />
          </div>
        </>
      )}
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
