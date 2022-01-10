import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <span>
        <a href={props.phonetics.audio} target="_blank">
          Listen
        </a>
      </span>
    </div>
  );
}
