import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState({
    player1: null,
    player2: null,
    gameStarted: false,
  });

  const handleWeaponPick = (player1Name, player2Name) => {
    setGameState({
      player1: player1Name,
      player2: player2Name,
      gameStarted: true,
    });
  };

  return (
    <div>
      {gameState.gameStarted ? (
        <TicTacToe player1={gameState.player1} player2={gameState.player2} />
      ) : (
        <Menu onWeaponPick={handleWeaponPick} />
      )}
    </div>
  );
}

export default App;
