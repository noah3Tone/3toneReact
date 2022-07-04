import {React, useState} from "react";
import {Route} from "react-router-dom";
import './App.css';

function API() {
  //wp fetch testing
  fetch('3tonemusic.com/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(posts => console.log(posts));

  return (
    <div className="App">
      <header className="App-header">
          Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default API;