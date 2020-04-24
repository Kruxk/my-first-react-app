import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title.js";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Example Title" />
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
