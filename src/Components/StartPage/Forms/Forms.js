import React, { useState } from "react";
import CheckboxChuck from "./../CheckboxChuck/CheckboxChuck";
import "./Forms.scss";

const Forms = (props) => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Color, setPlayer1Color] = useState("black");
  const [player2Color, setPlayer2Color] = useState("black");
  const [chuckJokes, setChuckJokes] = useState(false);

  const handleplayer1Color = (e) => {
    setPlayer1Color(e.target.value);
  };
  const handleplayer2Color = (e) => {
    setPlayer2Color(e.target.value);
  };
  return (
    <>
      <div className={"mainFormContainer"}>
        <div className={"playersForms"}>
          <form>
            <label>Player's 1 Name</label>
            <input
              type={"text"}
              name={"name"}
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
            ></input>
            <label>Let's choose your own color</label>
            <select value={player1Color} onChange={handleplayer1Color}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
          </form>
          <form>
            <label>Player's 2 Name</label>
            <input
              type={"text"}
              name={"name"}
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
            ></input>
            <label>Let's choose your own color</label>
            <select value={player2Color} onChange={handleplayer2Color}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
            <button
              onClick={(e) => {
                e.preventDefault();
                if(player1Name<1){
                  alert('To short name for Player 1')
                }
                else if(player2Name<1){
                  alert('To short name for Player 2')
                }
                else {
                  props.gameDataSet({
                    p1: {
                      name: player1Name,
                      color: player1Color,
                    },
                    p2: {
                      name: player2Name,
                      color: player2Color,
                    },
                    chuckJokes: chuckJokes,
                  });
                  props.setPlayOn(true);
                }}
                }

            >
              Let's play!
            </button>
          </form>
        </div>
        <CheckboxChuck isChuckJokesWanted={setChuckJokes} />
      </div>
    </>
  );
};

export default Forms;
