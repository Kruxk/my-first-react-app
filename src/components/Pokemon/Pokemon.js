// src/components/Pokemon.js
import React from "react";
import "./Pokemon.scss";

function Pokemon({ name, weight, awesome, terrifying, abilities }) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {weight} kg
          <br />
          Terrifying: {terrifying ? "Very" : "nah, lovable"}
          <br />
          Abilities ({abilities.length}):
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {abilities.map((ability) => {
          return <li className="list-group=item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
