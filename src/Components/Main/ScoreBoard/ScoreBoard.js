import React, { useState, useEffect } from "react";
import Score from "./Score/Score";
import RandomJokes from "./../RandomJokes/RandomJokes";
import "./ScoreBoard.scss";

const ScoreBoard = (props) => {
  return (
    <div className={"scoreBoard"}>
      <Score
        playerName={props.gameData.p1.name}
        playerScore={props.p1Score}
        playerSign={props.p1Sign}
        actualSign={props.actualSign}
      />
      <Score
        playerName={props.gameData.p2.name}
        playerScore={props.p2Score}
        playerSign={props.p2Sign}
        actualSign={props.actualSign}
      />
      {props.gameData.chuckJokes && <RandomJokes />}
    </div>
  );
};

export default ScoreBoard;
