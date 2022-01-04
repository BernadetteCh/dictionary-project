import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    const[keyword, setKeyword]=useState("");

function handleResponse(response){
    console.log(response.data[0]);//Wal es mehrere "Bedeutungen" für a Wort gebn kau, verwend i des Array bei data [0]. 
}
function handleChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}

function handleSubmit(event){
  event.preventDefault();
  //API Link:https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;//da setz i as useState ein damit ma noch jeden beliebigen Wort suchen kau
  axios.get(apiUrl).then(handleResponse);
}

  return (<div className="Dictionary">
      <form onSubmit={handleSubmit}>
          <input type="search" placeholder="search for a word" onChange={handleChange}></input>
       <button>Search</button>
      </form>
  </div>)
}
