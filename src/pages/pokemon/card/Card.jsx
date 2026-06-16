import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ pokemonData, onClick }) {
  console.log(pokemonData);
  return (
    <NavLink to={`/pokemon/${pokemonData.id}`}>
      {" "}
      <li
        // onClick={() => {
        //   onClick(pokemonData);
        // }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
      >
        <figure className="w-36 h-36 flex items-center justify-center">
          <img
            src={
              pokemonData.sprites.other.dream_world.front_default ||
              pokemonData.sprites.front_default
            }
            alt={pokemonData.name}
            className="w-full h-full object-contain"
          />
        </figure>

        <h1 className="text-2xl font-bold capitalize mt-4 text-gray-800">
          {pokemonData.name}
        </h1>

        <div className="mt-3">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium capitalize">
            {pokemonData.types.map((curType) => curType.type.name).join(", ")}
          </span>
        </div>
      </li>
    </NavLink>
  );
}
