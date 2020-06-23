import React, { useState, useEffect } from "react";
import CheckboxChuck from "./../CheckboxChuck/CheckboxChuck";
import "./Forms.scss";

const Forms = () => {
  return (
    <>
      <div className={"mainFormContainer"}>
        <div className={"playersForms"}>
          <form>
            <label>Player's 1 Name</label>
            <input type={"text"} name={"name"}></input>
            <label>Let's choose your own color</label>
            <input type={"text"} name={"color"}></input>
          </form>
          <form>
            <label>Player's 2 Name</label>
            <input type={"text"} name={"name"}></input>
            <label>Let's choose your own color</label>
            <input type={"text"} name={"color"}></input>
          </form>
        </div>
        <CheckboxChuck />
      </div>
      
    </>
  );
};

export default Forms;
