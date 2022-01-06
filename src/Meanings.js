import React from "react";

export default function Meanings(props){
    console.log(props.meanings);//i loop durch alle meanings weil a Wort mehr als a meaning und mehr als ein definition haben kann laut der API. in der console.log sieht ma dass es a object of arrey is
    return (
      <div className="Meaning">
        <h3>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function(definition,index){
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </p>
              </div>
            );
        })}
      </div>
    );
}