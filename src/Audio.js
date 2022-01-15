import React from "react";
import icon from "./sound.png";
import "./Audio.css";

export default function Audio(props) {
  
  function handleSound(event){
      event.preventDefault();
      let audio=document.querySelector(".audio");
      if(audio.paused){
          audio.play();
      }else{
          audio.pause();
      }

  }

  return (
    <div className="Audio">
      <audio className="audio" src={props.audio}></audio>
      <img src={icon} alt="audio_icon" onClick={handleSound}></img>
    </div>
  );
}
