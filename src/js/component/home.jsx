import React, { useState } from "react";

const Turnos = {
  X: "x",
  O: "o",
};
const board = Array(9).fill(null);

const Home = () => {
  const [state, setState] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  return (
    <div className=" container">
      <div className="text-center">
        <h1>TIC TAC TOE!</h1>
        <ChooseAPlayer />
        <h2>choose a player</h2>
        <form>
          <input type="text" />
          <input type="text" />
        </form>
        <form>
          <p>Choose your weapon!</p>
          <button>x</button>
          <button>o</button>
        </form>
        <section className="game">
          {board.map((_, index) => {
            return (
              <div className="cell" key={index}>
                <span className="cell_content"></span>
                <div />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
