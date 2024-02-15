import React from "react";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center color">
      <div className="Textalign">
        <input type="text" placeholder="Player1" />{" "}
        <input type="text" placeholder="Player2" />
      </div>
      <div className="Textalign">Choose your weapon!</div>
      <div className="Textalign">
        <button className="buttoncolor1">X</button>
        <button className="buttoncolor2">O</button>
      </div>
    </div>
  );
};

export default Menu;
