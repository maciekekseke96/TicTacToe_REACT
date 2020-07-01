import React, { useState, useEffect } from "react";
import "./RandomJokes.scss";

const RandomJokes = () => {
  const [jokes, setJokes] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    fetch("http://api.icndb.com/jokes")
      .then((response) => response.json())
      .then((data) => setJokes(data.value)).then(()=>{
          let intervalID = setInterval(()=>{
              setRandomNumber(Math.floor(Math.random() * 501))
          },5000)
      });
  }, []);


  if (jokes) {
    return (
      <div className={"randomJokes"}>
        <p>{jokes[randomNumber].joke}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default RandomJokes;
