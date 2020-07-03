import React, { useState, useEffect } from "react";
import CheckboxChuck from "./../CheckboxChuck/CheckboxChuck";
import "./Forms.scss";

const Forms = (props) => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Color, setPlayer1Color] = useState("black");
  const [player2Color, setPlayer2Color] = useState("black");
  const [chuckJokes, setChuckJokes] = useState(false);
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
            <input type={"text"} name={"color"}></input>
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
            <input type={"text"} name={"color"}></input>
            <button
              onClick={(e) => {
                e.preventDefault();
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
