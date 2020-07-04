import React, {useState} from "react";
import "./CellHover.scss"


const CellHover = (props) => {
    return (
    <div className={"cellHover"}>
        {props.sign}
    </div>
    )
}

export default CellHover;