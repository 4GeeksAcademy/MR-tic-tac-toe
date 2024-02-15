import React from "react";
import Tablero from "./Tablero";
import Menu from "./Menu";
import "./App.css";
const Juego = () => {
  return (
    <>
      <div className="container d-flex"></div>
      <div className=" col-12 Textalign mt-5">
        <h1>Tic Tac Toe in react.js!</h1>
      </div>
      <div className="col-12 Textalign mt-5">
        <Menu />
      </div>
      <div className="col-12 Textalign mt-5">{/* <Tablero /> */}</div>
    </>
  );
};

export default Juego;
