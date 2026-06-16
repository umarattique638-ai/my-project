import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Pokemon from "./pages/pokemon/Pokemon";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Counter from "./pages/counter/Counter";
import { pokeService } from "./pages/pokemon/service/pokemonService";
import PokemonDetail from "./pages/pokemon/PokemonDetail";
import { PokemonDetailService } from "./pages/pokemon/service/pokemonDetailService";
import Curd from "./pages/curd/curd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/pokemon",
          element: <Pokemon />,
          loader: pokeService,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />,
          loader: PokemonDetailService,
        },
        {
          path: "/counter",
          element: <Counter />,
        },
        {
          path: "/crud",
          element: <Curd />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
