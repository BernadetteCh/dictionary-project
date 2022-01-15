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
  } //die API von pexels will dass man die authorization via header "holt" und da muss man einfach nach dem API url diese Zeile headers: { Authorization: `Bearer ${pexelsApiKey}` }, einfügen
  //in der search funtion werden zwei apis abgerufen einmal die von dictionary und einmal vo der für die fotos vo pexels
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
