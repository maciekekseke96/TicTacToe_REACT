import React, { useState, useEffect } from "react";
import "./CheckboxChuck.scss";

const CheckboxChuck = () => {
  return (
    <div className={"checkboxChuck"}>
      <form className={"chuckInput"}>
        <label for="checkboxChuck">Do you want to get some Chuck Norris' jokes? </label>
        <input type="checkbox" id="checkboxChuck" name="checkboxChuck"></input>
      </form>
    </div>
  );
};

export default CheckboxChuck;
