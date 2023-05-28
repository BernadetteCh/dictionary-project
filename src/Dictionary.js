import React, { useState } from "react";
import axios from "axios";
import icon from "./owl-blue.png";
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
    setResults(response.data[0]); 
  }
  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; 
    axios.get(apiUrl).then(handleResponse);
   

    let pexelsApiKey =
      "563492ad6f91700001000001be1fd9e887f141208accb3c38e442891";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
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
        <div className="wave">
          <div className="head">
            <header>
              <h1>
                <span>
                  <img src={icon} alt="icon of books" className="icon"></img>
                </span>
                Dictionary App
              </h1>
            </header>
          </div>
        </div>

        <div className="content">
          <section className="Dictionary-Search">
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
            <small>i.e sunset, coding, yoga ..</small>
          </section>
          <div className="Results">
            <Results results={results} />
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
