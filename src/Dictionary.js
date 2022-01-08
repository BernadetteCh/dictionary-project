import React, {useState} from "react";
import axios from "axios";
import icon from "./books.jpg";
import {IoSearchOutline} from "react-icons/io5";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    const[keyword, setKeyword]=useState("");
    const[results, setResults]=useState("");

function handleResponse(response){
    console.log(response.data[0]);
   setResults(response.data[0]);//Wal es mehrere "Bedeutungen" für a Wort gebn kau, verwend i des Array bei data [0]. 
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

  return (
    <div className="Dictionary">
      <div className="head">
      <header>
        <img src={icon} alt="icon of books" className="icon"></img>Dictionary
      </header>
      <label>What word do you want to look up?</label>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search for a word"
          onChange={handleChange}
          className="search-input"
        ></input>
        <button>
          <IoSearchOutline />
        </button>
      </form>
      <small>i.e sunset, coding, yoga, paris..</small>
</div>
      <div className="Results">
        <Results results={results} />
      </div>
    </div>
  );
}
