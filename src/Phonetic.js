import React from "react";
import "./Phonetic.css";
import icon from "./sound.png";

export default function Phonetic(props) {
 

  
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <span>
     
          <a href={props.phonetics.audio} target="_blank" className="audiolink">
           <img src={icon}></img>
          </a>
    
      </span>
    </div>
  );
}
