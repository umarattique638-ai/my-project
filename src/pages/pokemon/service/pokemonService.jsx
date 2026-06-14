import axios from "axios";
const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

export const pokeService = async () => {
  const response = await axios.get(API);
  const responseData = response.data.results;

  const innerData = await Promise.all(
    responseData.map(async (i) => {
      const res = await axios.get(i.url);
      return res.data;
    }),
  );

  return innerData;
};
