import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5> {props.meaning.partOfSpeech} </h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. {definition.definition}
              <br />
              <em>{definition.example} </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
