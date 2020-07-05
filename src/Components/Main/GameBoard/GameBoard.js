import React, { useState, useEffect } from "react";
import Cell from "./Cell/Cell";
import "./GameBoard.scss";

const GameBoard = (props) => {
  const [cells, setCells] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);

  const [cellXColor, setCellXColor] = useState("black")
  const [cellOColor, setCellOColor] = useState("black")

  const gameSolvers = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const solveGame = (solvers) => {
    for (let i = 0; i < solvers.length; i++) {
      let Xpoints = 0;
      let Opoints = 0;
      solvers[i].forEach((element) => {
        if (cells[element].sign === "X") {
          Xpoints++;
        } else if (cells[element].sign === "O") {  
          Opoints++;
        }
      });
      if (Xpoints === 3) {
        console.log("Wygrał X");
        props.setP1Score(Number(props.p1Score) + 1);
        setTimeout(()=> setCells([{}, {}, {}, {}, {}, {}, {}, {}, {}]), 1000);
        setTimeout(() => {
          props.setGameState(null)}, 1000);
        props.setSign("X");
        break;
      } else if (Opoints === 3) {
        console.log("Wygrał O");
        props.setP2Score(Number(props.p2Score) + 1);
        setTimeout(()=> setCells([{}, {}, {}, {}, {}, {}, {}, {}, {}]), 1000);
        setTimeout(()=> {
          props.setGameState(null);
        }, 1000);
        props.setSign("X");
        break;
      }
    }
  };

  const colorManage = () => {
    if(props.p1Sign==="X"){
      setCellXColor(props.p1Color)
    } else if(props.p1Sign==="O"){
      setCellOColor(props.p1Color)
    }
    if(props.p2Sign==="X"){
      setCellXColor(props.p2Color)
    }else if(props.p2Sign==="O"){
      setCellOColor(props.p2Color)
    }
  }

  useEffect(() => {
    console.log("Zmieniono stan gry");
    solveGame(gameSolvers);
    colorManage();
  }, cells);
  return (
    <div className={"gameBoard"}>
      {cells.map((cell, index) => {
        return (
          <Cell
            p1Color = {props.p1Color}
            p2Color = {props.p2Color}
            actualSign={props.actualSign}
            cellXColor = {cellXColor}
            cellOColor = {cellOColor}
            setSign={props.setSign}
            setGameState={props.setGameState}
            cells={cells}
            setCells={setCells}
            id={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
