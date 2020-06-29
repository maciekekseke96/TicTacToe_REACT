import React, { useState, useEffect } from "react";
import StartPage from "./../StartPage/StartPage";
import "./App.scss";

function App() {
  const [isPlayOn, setisPlayOn] = useState(false);
  const [gameData, setGameData] = useState(null);
  const [chuckJokes, setChuckJokes] = useState(null);

  useEffect(() => {
    fetch("http://api.icndb.com/jokes")
      .then((response) => response.json())
      .then((data) => setChuckJokes(data.value));
  }, []);

  if (isPlayOn) {
    return <h1>Gra sie</h1>
  } else {
    return <StartPage setPlayOn= {setisPlayOn} gameDataSet={setGameData} />;
  }
}

export default App;
