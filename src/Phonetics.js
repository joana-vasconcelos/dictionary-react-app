import React from "react";
import play from "./play.svg";
import "./Dictionary.css";

export default function Phonetics(props) {
    let audio = new Audio(props.phonetics.audio)

    function playSound() {
        audio.play();
    }

    return (
      <div className="Phonetics">
        <span onClick={playSound}>
          <img src={play} /> Listen
        </span>
        <br />
        {props.phonetics.text}
      </div>
    );
}