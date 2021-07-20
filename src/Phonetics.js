import React from "react";
import play from "./play.svg";
import "./Phonetics.css";

export default function Phonetics(props) {
    let audio = new Audio(props.phonetics.audio)

    function playSound() {
        audio.play();
    }

    return (
      <div className="Phonetics">
        <span onClick={playSound}>
          <img src={play} alt="" />
        </span>{" "}
        {props.phonetics.text}
        
      </div>
    );
}