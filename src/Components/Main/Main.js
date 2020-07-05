import React from "react";
import "./Main.scss";
import GameBoard from "./GameBoard/GameBoard";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import Animated from "./Animated/Animated"

const Main = (props) => {

  const animatedPositionLeft = [{left: '50px', top: '50px', sign:"X"},{left: '250px', top: '250px', sign:"O"},{left: '50px', top: '450px', sign:"X"},{left: '250px', top: '650px', sign:"O"}]
  const animatedPositionRight = [{right: '50px', top: '50px', sign:"O"},{right: '250px', top: '250px', sign:"X"},{right: '50px', top: '450px', sign:"O"},{right: '250px', top: '650px', sign:"X"}]
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
        p1Color = {props.p1Color}
        p2Color = {props.p2Color}
      />
      {animatedPositionLeft.map((animated, index)=> {
          let keys = Object.keys(animated);
         return <Animated keys= {keys} key = {index} horizontal = {animated[keys[0]]} vertical = {animated[keys[1]]} sign = {animated[keys[2]]} />
      })}
            {animatedPositionRight.map((animated, index)=> {
          let keys = Object.keys(animated);
         return <Animated keys= {keys} key = {index} horizontal = {animated[keys[0]]} vertical = {animated[keys[1]]} sign = {animated[keys[2]]} />
      })}
    </div>
  );
};

export default Main;
