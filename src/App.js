import React from "react";
import "./App.css";
import Title from "./components/Title.js";
import Pokemon from "./components/Pokemon/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <main className="container my-5">
      <Title content="Pokemons" />
      <div className="row">
        {all_pokemon.map(({ name, weight, awesome, terrifying, abilities }) => {
          return (
            <div className="col-md-6 col-lg-4">
              <Pokemon
                name={name}
                weight={weight}
                awesome={awesome}
                terrifying={terrifying}
                abilities={abilities}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
