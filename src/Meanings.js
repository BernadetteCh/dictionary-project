import React from "react";
import "./Meanings.css";

export default function Meanings(props){
    console.log(props.meanings);//i loop durch alle meanings weil a Wort mehr als a meaning und mehr als ein definition haben kann laut der API. in der console.log sieht ma dass es a object of arrey is
    return (
      <div className="Meaning">
        <div className="partofspeech">
          <h2>{props.meanings.partOfSpeech}</h2>
        </div>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    );
}