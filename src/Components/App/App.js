import React, { useState, useEffect } from "react";
import StartPage from "./../StartPage/StartPage";
import Main from "./../Main/Main";
import "./App.scss";

function App() {
  const [isPlayOn, setisPlayOn] = useState(false);
  const [gameData, setGameData] = useState(null);
  const [p1Score, setP1Score] = useState(0);
  const [p1Sign, setP1Sign] = useState("X");
  const [p2Sign, setP2Sign] = useState("O");
  const [p2Score, setP2Score] = useState(0);
  const [gameState, setGameState] = useState(null);
  const [actualSign, setActualSign] = useState("X");

  if (isPlayOn) {
    return (
      <Main
        p1Score={p1Score}
        setP1Score={setP1Score}
        p1Sign={p1Sign}
        setP1Sign={setP1Sign}
        p2Score={p2Score}
        setP2Score={setP2Score}
        p2Sign={p2Sign}
        setP2Sign={setP2Sign}
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
