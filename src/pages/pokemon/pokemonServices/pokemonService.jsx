import axios from "axios";

const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

export const pokemonFunction = async () => {
  const response = await axios.get(API);
  const urls = response.data.results.map((i) => {
    return i.url;
  });
  console.log(urls);
  return urls;
};
