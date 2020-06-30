import React, { useState, useEffect } from "react";
import Cell from "./Cell/Cell";
import "./GameBoard.scss";

const GameBoard = (props) => {
  const [cells, setCells] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  return (
    <div className={"gameBoard"}>
      {cells.map((cell, index) => {
        return <Cell setGameState={props.setGameState} cells={cells} setCells={setCells} id={index} key={index} />;
      })}
    </div>
  );
};

export default GameBoard;
