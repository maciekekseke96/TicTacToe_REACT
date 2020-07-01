import React, { useState, useEffect } from "react";
import StartPage from "./../StartPage/StartPage";
import Main from "./../Main/Main";
import "./App.scss";

function App() {
  const [isPlayOn, setisPlayOn] = useState(true);
  const [gameData, setGameData] = useState({
    p1: { name: "Maciej", color: "black", sign: "X", score: 0 },
    p2: { name: "Maciej", color: "black", sign: "0", score: 0 },
    chuckJokes: true,
  });
  const [chuckJokes, setChuckJokes] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [actualSign, setActualSign] = useState("X");

  if (isPlayOn) {
    return (
      <Main
        jokes={chuckJokes}
        gameData={gameData}
        actualSign={actualSign}
        setSign={setActualSign}
        setGameState={setGameState}
      />
    );
  } else {
    return <StartPage setPlayOn={setisPlayOn} gameDataSet={setGameData} />;
  }
}

export default App;
