import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props){
    //i loop durch alle meanings weil a Wort mehr als a meaning und mehr als ein definition haben kann laut der API. in der console.log sieht ma dass es a object of arrey is
    return (
      <div className="Meaning">
        <div className="partofspeech">
          <h2>{props.meanings.partOfSpeech}</h2>
        </div>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <span>Definition </span>
              <span>{definition.definition}</span>
              <br />
              <span>Example </span>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
        
      </div>
    );
}