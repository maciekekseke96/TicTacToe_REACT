import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Forms from "./Forms/Forms";
import "./StartPage.scss";

const StartPage = () => {
  return (
    <div class={"startPage"}>
      <Header />
      <Forms />
    </div>
  );
};

export default StartPage;
