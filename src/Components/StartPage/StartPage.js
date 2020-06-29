import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Forms from "./Forms/Forms";
import "./StartPage.scss";

const StartPage = (props) => {
  return (
    <div className={"startPage"}>
      <Header />
      <Forms setPlayOn = {props.setPlayOn} gameDataSet = {props.gameDataSet} />
    </div>
  );
};

export default StartPage;
