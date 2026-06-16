import axios from "axios";
import { getMovie } from "./axiosServices";

export const pokeService = async () => {
  const response = await getMovie();
  const responseData = response.data.results;

  const innerData = await Promise.all(
    responseData.map(async (i) => {
      const res = await axios.get(i.url);
      return res.data;
    }),
  );

  return innerData;
};
