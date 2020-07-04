import React from "react";
import "./Cell.scss";

const Cell = (props) => {
  const cellId = props.id;

  const handleCellClick = () => {
    let cells = [...props.cells];
    if (!cells[cellId].status) {
      cells[cellId] = { status: "marked", sign: props.actualSign };
      props.setCells(cells);

      props.setGameState(cells);
      if (props.actualSign === "X") {
        props.setSign("O");
      } else {
        props.setSign("X");
      }
    } else {
      console.log("Zajęte");
    }
  };
  return (
    <div
      onClick={() => {
        handleCellClick();
      }}
      className={"cell"}
    >
      {props.cells[cellId].sign}
    </div>
  );
};

export default Cell;
