import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f91700001000001f4e276e077204c7f8c1ed6b86d8ec891";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word definition are you looking for?</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              type="search"
              onChange={handleKeywordChange}
              placeholder="Type a word..."
            />
            <input
              className="submit"
              type="submit"
              value="Search"
              onClick={handleSubmit}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
