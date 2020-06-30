import React, { useState, useEffect } from "react";
import StartPage from "./../StartPage/StartPage";
import Main from "./../Main/Main"
import "./App.scss";

function App() {
  const [isPlayOn, setisPlayOn] = useState(true);
  const [gameData, setGameData] = useState(null);
  const [chuckJokes, setChuckJokes] = useState(null);
  const [gameState, setGameState] = useState(null)

  useEffect(() => {
    fetch("http://api.icndb.com/jokes")
      .then((response) => response.json())
      .then((data) => setChuckJokes(data.value));
  }, []);

  if (isPlayOn) {
    return <Main setGameState = {setGameState} />
  } else {
    return <StartPage setPlayOn= {setisPlayOn} gameDataSet={setGameData} />;
  }
}

export default App;
