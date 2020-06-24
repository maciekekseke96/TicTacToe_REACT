import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Forms from "./Forms/Forms";
import "./StartPage.scss";

const StartPage = () => {
  return (
    <div className={"startPage"}>
      <Header />
      <Forms />
    </div>
  );
};

export default StartPage;
