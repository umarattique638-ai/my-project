import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Pokemon from "./pages/pokemon/Pokemon";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Counter from "./pages/counter/Counter";

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
        },
        {
          path: "/counter",
          element: <Counter />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
