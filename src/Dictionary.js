import React, { useState } from "react";
import axios from "axios";
import icon from "./books.jpg";
import { IoSearchOutline } from "react-icons/io5";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]); //Wal es mehrere "Bedeutungen" für a Wort gebn kau, verwend i des Array bei data [0].
  }
  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; //da setz i as useState ein damit ma noch jeden beliebigen Wort suchen kau
    axios.get(apiUrl).then(handleResponse);
    //API Link:https://dictionaryapi.dev/

    let pexelsApiKey =
      "563492ad6f91700001000001be1fd9e887f141208accb3c38e442891";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="head">
          <header>
            <img src={icon} alt="icon of books" className="icon"></img>
            Dictionary
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
        <Photos photos={photos}/>
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
