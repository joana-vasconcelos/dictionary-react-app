import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
          <h2>What are you looking for?</h2>
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
      </div>
    );
  } else {
    load();
  }
}
