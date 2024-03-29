import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function Results(props){

    if(props.results){
        return (
          <div className="Results">
            <section>
              <h2>{props.results.word}</h2>
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetics={phonetic} />
                  </div>
                );
              })}
            </section>

            {props.results.meanings.map(function (meaning, index) {
              return (
                <section key={index}>
                  <Meanings meanings={meaning} />
                </section>
              );
            })}
          </div>
        );
    }
    else{
        return null;
    }
   
     

}