// import React, { useEffect, useState } from "react";
// import usePokemon from "./hook/usePokemon";
// import Modal from "./modal/modal";
// import Card from "./card/Card";
// import { useLoaderData } from "react-router-dom";

// function Pokemon() {
//   const {
//     loading,
//     error,
//     data,
//     search,
//     setSearch,
//     pokemonFunction,
//     selectedPokemon,
//     setSelectedPokemon,
//   } = usePokemon();

//   useEffect(() => {
//     pokemonFunction();
//   }, []);

//   const filterData = data.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1>{error.message}</h1>;

//   const loaderData = useLoaderData();
//   console.log("Checking Loader ", loaderData);
//   return (
//     <>
//       <h1 className="text-center text-3xl font-bold py-5">Pokemon</h1>

//       <input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2"
//         placeholder="Search..."
//       />

//       <ul className="grid grid-cols-4 gap-4 mt-5">
//         {filterData.map((pokemon) => (
//           <Card
//             key={pokemon.id}
//             pokemonData={pokemon}
//             onClick={setSelectedPokemon}
//           />
//         ))}
//       </ul>

//       <Modal
//         pokemon={selectedPokemon}
//         onClose={() => setSelectedPokemon(null)}
//       />
//     </>
//   );
// }

// export default Pokemon;

import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Modal from "./modal/modal";
import Card from "./card/Card";

function Pokemon() {
  const data = useLoaderData();
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const filterData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1 className="text-center text-3xl font-bold py-5">Pokemon</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2"
        placeholder="Search..."
      />

      <ul className="grid grid-cols-4 gap-4 mt-5">
        {filterData.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemonData={pokemon}
            onClick={setSelectedPokemon}
          />
        ))}
      </ul>

      {/* <Modal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      /> */}
    </>
  );
}

export default Pokemon;
