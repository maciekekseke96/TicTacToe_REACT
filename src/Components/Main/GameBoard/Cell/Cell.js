import React, { useState, useEffect} from "react";
import "./Cell.scss";

const Cell = (props) => {
  const cellId = props.id;
  const [color, setColor] = useState('black')


  let styles = {
    height: '150px',
    width: '150px',
    border: '1px solid black',
    float: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '60px',
    fontFamily: "'Pangolin', cursive",
    backgroundColor: 'white',
    position: 'relative',
    color: props.color,
  }


  const handleCellClick = () => {
    let cells = [...props.cells];
    if(props.actualSign==="X"){
      setColor(props.CellXColor)
    }
    else if (props.actualSign==="O"){
      setColor(props.CellOColor)
    }
    if (!cells[cellId].status) {
      cells[cellId] = { status: "marked", sign: props.actualSign, color: color};
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
