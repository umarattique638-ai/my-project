import React from "react";

function Modal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-96 relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          ✖
        </button>

        <h2 className="text-2xl font-bold capitalize text-center">
          {pokemon.name}
        </h2>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto"
        />

        <p className="text-center mt-2">Height: {pokemon.height}</p>

        <p className="text-center">Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
}

export default Modal;
