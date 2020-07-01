import React, { useState, useEffect } from "react";
import "./Score.scss";

const Score = (props) => {
  return (
    <div className="score">
      <h1>{props.playerName}</h1>
      <p>{props.playerScore}</p>
    </div>
  );
};

export default Score;