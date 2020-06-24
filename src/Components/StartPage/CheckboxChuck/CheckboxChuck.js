import React, { useState, useEffect } from "react";
import "./CheckboxChuck.scss";

const CheckboxChuck = () => {
  return (
    <div className={"checkboxChuck"}>
      <form className={"chuckInput"}>
        <input checked={true} type="checkbox" id="checkboxChuck" name="checkboxChuck"></input>
        <label htmlFor="checkboxChuck">
          Mark if you want to get some Chuck Norris' jokes!
        </label>
      </form>
    </div>
  );
};

export default CheckboxChuck;
