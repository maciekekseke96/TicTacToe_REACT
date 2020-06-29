import React, { useState, useEffect } from "react";
import StartPage from "./../StartPage/StartPage";
import "./App.scss";

function App() {
  const [isPlayOn, setisPlayOn] = useState(false);
  const [gameData, setGameData] = useState(null)

  if (isPlayOn) {
  } else {
    return <StartPage gameDataSet = {setGameData} />;
  }
}

export default App;
