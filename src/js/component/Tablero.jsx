import React from "react";
import { useState, useEffect } from "react";

const Tablero = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [winCondition, setWinCondition] = useState(null);
  const [gameState, setGameState] = useState("inProgress");

  const player1 = "X";
  const player2 = "O";

  const handleTileClick = (i) => {
    if (gameState !== "inProgress" || tiles[i] !== null) return;

    const newTiles = [...tiles];
    newTiles[i] = playerTurn;
    setTiles(newTiles);
  };

  const handleReset = () => {
    setGameState("inProgress");
    setTiles(Array(9).fill(null));
    setWinCondition(null);
  };

  useEffect(() => {
    const checkWinner = () => {
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

      for (const line of lines) {
        const [a, b, c] = line;
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
          setWinCondition(true);
          setGameState(tiles[a] === player1 ? "player1Wins" : "player2Wins");
          return;
        }
      }

      if (tiles.every((tile) => tile !== null)) {
        setGameState("draw");
      }
    };

    checkWinner();
  }, [tiles]);

  const playerTurn =
    tiles.filter((tile) => tile === player1).length ===
    tiles.filter((tile) => tile === player2).length
      ? player1
      : player2;

  return (
    <>
      <div>
        <h1 className="pt-3">Tic Tac Toe</h1>
        <h3 className="text-center my-4">It is {playerTurn} turn!</h3>
        <Positions
          playerTurn={playerTurn}
          tiles={tiles}
          onTileClick={handleTileClick}
          winCondition={winCondition}
        />
        <Game gameState={gameState} />
        <Reset onReset={handleReset} />
      </div>
    </>
  );
};

export default Tablero;
