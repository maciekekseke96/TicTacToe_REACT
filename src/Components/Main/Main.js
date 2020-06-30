import React, { useState, useEffect } from "react";
import "./Main.scss";
import GameBoard from "./GameBoard/GameBoard";

const Main = (props) => {
  return (
    <div className={"main"}>
      <GameBoard setGameState= {props.setGameState} />
    </div>
  );
};

export default Main;
