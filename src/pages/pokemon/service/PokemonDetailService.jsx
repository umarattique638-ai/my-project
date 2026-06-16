import axios from "axios";

export const PokemonDetailService = async ({ params }) => {
  const { id } = params;

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
};
