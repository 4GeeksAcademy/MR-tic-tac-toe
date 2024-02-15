import React from "react";

const Tablero = ({ squares, onClick }) => {
  return (
    <div className="tablero">
      {squares.map((square, index) => (
        <button key={index} className="casilla" onClick={() => onClick(index)}>
          {square}
        </button>
      ))}
    </div>
  );
};

export default Tablero;
