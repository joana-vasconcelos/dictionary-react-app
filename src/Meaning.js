import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
              <Example example={definition.example} />
          
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
