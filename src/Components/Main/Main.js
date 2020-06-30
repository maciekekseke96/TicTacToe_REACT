import React, { useState, useEffect } from "react";
import "./Main.scss";
import GameBoard from "./GameBoard/GameBoard";

const Main = (props) => {
  return (
    <div className={"main"}>
      <GameBoard
        actualSign={props.actualSign}
        setSign={props.setSign}
        setGameState={props.setGameState}
      />
    </div>
  );
};

export default Main;