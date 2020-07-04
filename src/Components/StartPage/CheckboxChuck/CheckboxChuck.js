import React  from "react";
import "./CheckboxChuck.scss";

const CheckboxChuck = (props) => {
  return (
    <div className={"checkboxChuck"}>
      <form className={"chuckInput"}>
        <input type="checkbox" id="checkboxChuck" name="checkboxChuck" onChange = {(e)=> props.isChuckJokesWanted(e.target.checked)}></input>
        <label htmlFor="checkboxChuck">
          Mark if you want to get some Chuck Norris' jokes!
        </label>
      </form>
    </div>
  );
};

export default CheckboxChuck;
