import React from "react";
import Menu from "./Menu";
import Board from "./Board";

const TicTacToe = () => {
  return (
    <>
      <div className="container d-flex"></div>
      <div className=" col-12 Textalign mt-5">
        <h1>Tic Tac Toe in react.js!</h1>
      </div>
      <div className="col-12 Textalign mt-5">
        <Menu />
      </div>
      <div className="col-12 Textalign mt-5">
        <Board />
      </div>
    </>
  );
};

export default TicTacToe;
