import React from "react";
import gameState from "./Tablero";

function Game({ gameState }) {
  let message;
  switch (gameState) {
    case "playerXWins":
      message = "Player X wins!";
      break;
    case "playerOWins":
      message = "Player O wins!";
      break;
    case "draw":
      message = "It's a draw!";
      break;
    default:
      message = "";
  }

  return (
    <div className="text-center my-4">{message && <h2>{message}</h2>}</div>
  );
}

export default Game;
