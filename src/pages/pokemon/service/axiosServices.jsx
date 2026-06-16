import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=124",
});

export const getMovie = () => {
  return api.get("");
};
