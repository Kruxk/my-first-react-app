// src/components/Pokemon.js
import React from "react";

export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {"Charizard"}</h2>
      <p>Weight: {90} kg</p>
      <p>Awesome: {true}</p>
      <p>Terrifying: {false}</p>
      <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p>
    </div>
  );
}
