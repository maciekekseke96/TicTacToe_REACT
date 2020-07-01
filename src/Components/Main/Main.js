import React, { useState, useEffect } from "react";
import "./Main.scss";
import GameBoard from "./GameBoard/GameBoard";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

const Main = (props) => {
  return (
    <div className={"main"}>
      <ScoreBoard jokes={props.jokes} gameData={props.gameData} />
      <GameBoard
        actualSign={props.actualSign}
        setSign={props.setSign}
        setGameState={props.setGameState}
      />
    </div>
  );
};

export default Main;
