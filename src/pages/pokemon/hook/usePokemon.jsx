import axios from "axios";
import React, { useState } from "react";
import { pokeService } from "../service/pokemonService";

function usePokemon() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const pokemonFunction = async () => {
    try {
      const data = await pokeService();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    data,
    search,
    setSearch,
    pokemonFunction,
    selectedPokemon,
    setSelectedPokemon,
  };
}

export default usePokemon;
