import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PokemonDetail() {
  const data = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold capitalize mb-4">{data.name}</h1>

      <img
        src={
          data.sprites.other.dream_world.front_default ||
          data.sprites.front_default
        }
        alt={data.name}
        className="w-60 h-60"
      />

      <div className="mt-6">
        <p>ID: {data.id}</p>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Base Experience: {data.base_experience}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl">Types</h2>

        {data.types.map((type) => (
          <span
            key={type.type.name}
            className="mr-2 px-3 py-1 bg-blue-100 rounded"
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl">Abilities</h2>

        <ul>
          {data.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl">Stats</h2>

        <ul>
          {data.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
