import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    const[keyword, setKeyword]=useState("");


function handleChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

function handleSubmit(event){
    event.preventDefault();
    alert(`Searching for ${keyword}`);
}

  return (<div className="Dictionary">
      <form onSubmit={handleSubmit}>
          <input type="search" placeholder="search for a word" onChange={handleChange}></input>
       <button>Search</button>
      </form>
  </div>)
}
