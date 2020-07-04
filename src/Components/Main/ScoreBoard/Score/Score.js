import React, { useState, useEffect } from "react";
import "./Score.scss";

const Score = (props) => {

  let styles = {}

  if(props.actualSign===props.playerSign){
    styles = {
      height: '80%',
      width: '20%',
      border: '5px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '12px',
      fontFamily: '"Pangolin", cursive',
      backgroundColor: '#99ff99',
      animation: 'strobe 1s infinite',
    }
  }else {
    styles = {
      height: '80%',
      width: '20%',
      border: '5px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '12px',
      fontFamily: '"Pangolin", cursive',
      backgroundColor: 'white',
    }
  }
  return (
    <div style={styles} className="score">
      <h1>{props.playerName}</h1>
      <p>{props.playerScore}</p>
      <h4>Sign : {props.playerSign}</h4>
    </div>
  );
};

export default Score;
