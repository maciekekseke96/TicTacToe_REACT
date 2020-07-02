import React, { useState, useEffect } from "react";
import Score from "./Score/Score";
import RandomJokes from "./../RandomJokes/RandomJokes"
import "./ScoreBoard.scss";

const ScoreBoard = (props) => {
  return (
    <div className={"scoreBoard"}>
      <Score playerName = {props.gameData.p1.name} playerScore = {props.gameData.p1.score} />
      <Score playerName = {props.gameData.p2.name} playerScore = {props.gameData.p2.score} />
      {(props.gameData.chuckJokes &&<RandomJokes />)}
    </div>
  );
};

export default ScoreBoard;
