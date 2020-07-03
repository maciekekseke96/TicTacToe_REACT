import React, { useState, useEffect } from "react";
import "./Score.scss";

const Score = (props) => {
  return (
    <div className="score">
      <h1>{props.playerName}</h1>
      <p>{props.playerScore}</p>
      <h4>Sign : {props.playerSign}</h4>
    </div>
  );
};

export default Score;
