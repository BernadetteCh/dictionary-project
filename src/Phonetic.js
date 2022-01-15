import React from "react";

import Audio from "./Audio";

export default function Phonetic(props) {
 
  return (
    <div className="Phonetics">
      {props.phonetics.text} <Audio audio={props.phonetics.audio} />

    </div>
  );
}
