import React from "react";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className=" container">
      <div className="text-center">
        <h1>TIC TAC TOE!</h1>
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
      </div>
    </div>
  );
};

export default Home;
