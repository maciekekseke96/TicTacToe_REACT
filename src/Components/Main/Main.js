import React from "react";
import "./Main.scss";
import GameBoard from "./GameBoard/GameBoard";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

const Main = (props) => {
  return (
    <div className={"main"}>
      <ScoreBoard
        p1Score={props.p1Score}
        p1Sign={props.p1Sign}
        p2Score={props.p2Score}
        p2Sign={props.p2Sign}
        actualSign={props.actualSign}
        gameData={props.gameData}
      />
      <GameBoard
        actualSign={props.actualSign}
        setSign={props.setSign}
        setGameState={props.setGameState}
        p1Score={props.p1Score}
        setP1Score={props.setP1Score}
        p2Score={props.p2Score}
        setP2Score={props.setP2Score}
        p1Sign={props.p1Sign}
        setP1Sign={props.setP1Sign}
        p2Sign={props.p2Sign}
        setP2Sign={props.setP2Sign}
      />
    </div>
  );
};

export default Main;
